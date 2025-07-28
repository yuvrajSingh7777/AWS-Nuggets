const { DynamoDBClient } = require('@aws-sdk/client-dynamodb');
const { DynamoDBDocumentClient, GetCommand, DeleteCommand } = require('@aws-sdk/lib-dynamodb');

const dotenv = require('dotenv');
dotenv.config();

const REGION = process.env.AWS_REGION || 'us-east-1';
const ddbClient = new DynamoDBClient({ region: REGION });
const ddbDocClient = DynamoDBDocumentClient.from(ddbClient);

const TABLE_NAME = 'Users';

exports.getProfile = async (req, res) => {
  try {
    // req.user contains 'email' from token
    const params = {
      TableName: TABLE_NAME,
      Key: { email: req.user.email }
    };
    const data = await ddbDocClient.send(new GetCommand(params));
    if (!data.Item) return res.status(404).json({ message: 'User not found' });
    const user = data.Item;
    delete user.password;
    delete user.resetPasswordToken;
    delete user.resetPasswordExpires;
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching profile', error: err.message });
  }
};

// In your delete account controller
exports.deleteAccount = async (req, res) => {
  try {
    const email = req.user.email;

    // Delete from DynamoDB
    await ddbDocClient.send(new DeleteCommand({
      TableName: TABLE_NAME,
      Key: { email },
    }));

    // ✅ Destroy session
    req.logout(function(err) {
      if (err) return next(err);

      req.session.destroy((err) => {
        if (err) return res.status(500).json({ success: false, message: "Error destroying session" });

        res.clearCookie('connect.sid'); // Remove session cookie
        return res.json({ success: true, message: "Account deleted and logged out" });
      });
    });
  } catch (err) {
    console.error("❌ Error deleting account:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

