import { useRef, useState } from "react";

const IAMSection = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoClick = () => {
    const video = videoRef.current;
    if (video) {
      video.play();
      video.setAttribute("controls", "true");
      setIsPlaying(true);
    }
  };

  return (
    <div className="max-w-5xl dark:bg-gray-800 mx-auto p-6 bg-white rounded-lg shadow-lg mt-12 md:mt-15">
      <h1 className="text-3xl dark:text-gray-50 sm:text-4xl flex gap-2 font-bold text-black"><span>&#10137;</span> AWS IAM Identity and Access Management
      </h1>

      {/* Video Section */}
      <div className="mt-8 mb-8">
        <div className="rounded-xl overflow-hidden shadow w-full max-w-180 bg-blue-50 mx-auto">
          <div className="w-full aspect-video bg-black h-50 md:h-100 relative">
            <video
              ref={videoRef}
              src="https://awsbuckyt.s3.eu-north-1.amazonaws.com/assets/WVZROEJSeTN4R2dfNzIwcA_out.mp4" 
              className="w-full h-full"
              preload="none"
              onClick={handleVideoClick}
            />
            {!isPlaying && (
              <div
                onClick={handleVideoClick}
                className="absolute inset-0 flex items-center justify-center bg-none cursor-pointer"
              >
                <img
                  src="https://awsbuckyt.s3.eu-north-1.amazonaws.com/assets/lecture4.png"
                  alt="IAM Tutorial Thumbnail"
                  className="absolute w-full h-full object-fill"
                />
                <button className="cursor-pointer bg-gray-50 md:bg-transparent px-4 py-3.5 md:px-0 md:py-0 rounded-full text-black z-2 text-3xl md:text-6xl">
                  ▶
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Steps Section */}
      <div className="space-y-6">

        {/* 1. Understanding IAM Core Components */}
        <div className="bg-blue-50 dark:bg-blue-100 p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-blue-700">1. Understanding IAM Core Components</h2>
          <p className="mt-2">
            Before diving into the steps, it's crucial to understand the main components of IAM:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>
              <strong>IAM Users:</strong> Identities created in AWS that represent a person or an application. Each user has unique credentials (username/password for console, access keys for programmatic access). It's recommended to create individual IAM users instead of using the root account for daily tasks.
            </li>
            <li>
              <strong>IAM Groups:</strong> Collections of IAM users. Permissions are typically assigned to groups, and all users in that group inherit those permissions. This simplifies management, especially for many users with similar access needs.
            </li>
            <li>
              <strong>IAM Policies:</strong> JSON documents that define permissions. They specify what actions are allowed or denied on which AWS resources. Policies can be attached to users, groups, or roles.
              <ul className="list-disc pl-5 mt-1 space-y-1">
                <li><em>AWS Managed Policies:</em> Predefined policies created and managed by AWS (e.g., <code className="bg-white dark:bg-gray-100 px-1">AmazonS3ReadOnlyAccess</code>).</li>
                <li><em>Customer Managed Policies:</em> Custom policies you create and manage to meet specific needs.</li>
                <li><em>Inline Policies:</em> Policies embedded directly within a user, group, or role.</li>
              </ul>
            </li>
            <li>
              <strong>IAM Roles:</strong> IAM identities that you can create in your account that have specific permissions. Roles are designed to be assumable by trusted entities, such as other AWS services (e.g., EC2 instances), other AWS accounts, or federated users. Roles provide temporary credentials and are crucial for secure application access and cross-account access.
            </li>
          </ul>
        </div>

        {/* 2. Initial Setup and Best Practices */}
        <div className="bg-green-50 dark:bg-green-100 p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-green-700">2. Initial Setup and Best Practices</h2>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>
              <strong>Secure Your Root Account:</strong> Lock away your root user access keys and use the root account only for tasks that explicitly require root credentials (e.g., changing account settings, closing an account).
            </li>
            <li>
              Enable Multi-Factor Authentication (MFA) for your root account immediately.
            </li>
            <li>
              <strong>Create an Administrator IAM User:</strong>
              <ul className="list-disc pl-5 mt-1 space-y-1">
                <li>Sign in to the AWS Management Console with your root account credentials.</li>
                <li>Navigate to the IAM service.</li>
                <li>Create a new IAM user (e.g., <code className="bg-white dark:bg-gray-100 px-1">admin-user</code>).</li>
                <li>Attach the <code className="bg-white dark:bg-gray-100 px-1">AdministratorAccess</code> AWS managed policy to this user to grant full access.</li>
                <li>Enable MFA for this administrator user.</li>
                <li>Log out of the root account and sign in using this new administrator IAM user for all subsequent administrative tasks.</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* 3. Creating IAM Users and Groups */}
        <div className="bg-yellow-50 dark:bg-yellow-100 p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-yellow-700">3. Creating IAM Users and Groups</h2>
          <h3 className="mt-2 font-semibold">Create IAM Groups:</h3>
          <ul className="list-disc pl-6 mt-1 space-y-1">
            <li>In the IAM console, go to <em>User groups</em> and click <em>Create group</em>.</li>
            <li>Give the group a meaningful name (e.g., <code className="bg-white dark:bg-gray-100 px-1">Developers</code>, <code className="bg-white dark:bg-gray-100 px-1">Auditors</code>, <code className="bg-white dark:bg-gray-100 px-1">Marketing</code>).</li>
            <li>Attach permissions policies to the group. For example, attach <code>AmazonS3ReadOnlyAccess</code> for an Auditors group.</li>
            <li>Follow the principle of least privilege – grant only necessary permissions.</li>
            <li>Attach AWS managed or your own customer managed policies.</li>
          </ul>
          <h3 className="mt-4 font-semibold">Create Individual IAM Users:</h3>
          <ul className="list-disc pl-6 mt-1 space-y-1">
            <li>In the IAM console, go to <em>Users</em> and click <em>Create user</em>.</li>
            <li>Provide a username.</li>
            <li>Choose the access type:
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li><code>AWS Management Console access</code>: for console login (configure password and password reset enforcement).</li>
                <li><code>Programmatic access</code>: for APIs, SDKs (generates access keys to save securely).</li>
              </ul>
            </li>
            <li>Add the user to appropriate groups (recommended over direct policy attachments).</li>
            <li>(Optional) Attach policies directly or add metadata tags.</li>
          </ul>
          <h3 className="mt-4 font-semibold">Configure MFA for Users:</h3>
          <ul className="list-disc pl-6 mt-1 space-y-1">
            <li>Strongly recommend and enforce MFA for all privileged users, ideally all users.</li>
            <li>Users configure MFA devices via their AWS console security credentials page.</li>
          </ul>
        </div>

        {/* 4. Implementing Advanced Access Control */}
        <div className="bg-purple-50 dark:bg-purple-100 p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-purple-700">4. Implementing Advanced Access Control</h2>
          <h3 className="mt-2 font-semibold">Use IAM Roles for Applications and Cross-Account Access:</h3>
          <ul className="list-disc pl-6 mt-1 space-y-1">
            <li>For EC2 instances: create and attach an IAM role with necessary permissions; code uses temporary credentials automatically.</li>
            <li>For cross-account: create roles in the trusting account with trust policies allowing trusted account users/roles to assume it.</li>
            <li>Create roles via IAM console → Roles → Create role → select trusted entity → attach permissions policies.</li>
          </ul>
          <h3 className="mt-4 font-semibold">Implement Identity Federation (SSO/Identity Center):</h3>
          <ul className="list-disc pl-6 mt-1 space-y-1">
            <li>Use AWS IAM Identity Center (AWS SSO) for centralized multi-account access and application management.</li>
            <li>Integrate external identity providers (e.g., Active Directory, SAML 2.0-compliant IdPs) for unified sign-on.</li>
          </ul>
          <h3 className="mt-4 font-semibold">Leverage Attribute-Based Access Control (ABAC):</h3>
          <ul className="list-disc pl-6 mt-1 space-y-1">
            <li>Define permissions using tags on users and resources, simplifying scalable permissions management.</li>
          </ul>
        </div>

        {/* 5. Continuous Monitoring and Management */}
        <div className="bg-pink-50 dark:bg-pink-100 p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-pink-700">5. Continuous Monitoring and Management</h2>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Enable AWS CloudTrail to log all API calls for auditing, compliance, and troubleshooting.</li>
            <li>Rotate IAM user access keys periodically to reduce risk.</li>
            <li>Regularly review IAM policies and assignments. Enforce the principle of least privilege by removing excessive permissions and unused credentials.</li>
          </ul>
        </div>

      </div>

      {/* Command Reference Table */}
      <div className="mt-8">
        <h2 className="text-xl dark:text-gray-50 font-bold mb-4">Command Reference</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-700">
            <thead className="bg-gray-100 dark:bg-gray-700">
              <tr>
                <th className="border dark:bg-gray-50 dark:border-gray-600 p-2 text-left">Step</th>
                <th className="border dark:bg-gray-50 dark:border-gray-600 p-2 text-left">CLI Command / Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border dark:border-gray-600 dark:text-gray-50 p-2">Create IAM User</td>
                <td className="border dark:border-gray-600 dark:text-gray-50 p-2 font-mono">
                  <code>aws iam create-user --user-name username</code>
                </td>
              </tr>
              <tr className="bg-gray-50 ">
                <td className="border dark:border-gray-600 p-2">Create Group</td>
                <td className="border dark:border-gray-600 p-2 font-mono">
                  <code>aws iam create-group --group-name GroupName</code>
                </td>
              </tr>
              <tr>
                <td className="border dark:border-gray-600 dark:text-gray-50 p-2">Add User to Group</td>
                <td className="border dark:border-gray-600 dark:text-gray-50 p-2 font-mono">
                  <code>aws iam add-user-to-group --user-name username --group-name GroupName</code>
                </td>
              </tr>
              <tr className="bg-gray-50 ">
                <td className="border dark:border-gray-600 p-2">Attach Policy</td>
                <td className="border dark:border-gray-600 p-2 font-mono">
                  <code>
                    aws iam attach-group-policy --policy-arn arn:aws:iam::aws:policy/PolicyName --group-name GroupName
                  </code>
                </td>
              </tr>
              <tr>
                <td className="border dark:border-gray-600 dark:text-gray-50 p-2">Create Role with Trust Policy</td>
                <td className="border dark:border-gray-600 dark:text-gray-50 p-2 font-mono">
                  <code>
                    aws iam create-role --role-name RoleName --assume-role-policy-document file://trust-policy.json
                  </code>
                </td>
              </tr>
              <tr className="bg-gray-50 ">
                <td className="border dark:border-gray-600 p-2">Enable MFA on User</td>
                <td className="border dark:border-gray-600 p-2 font-mono">Console-based MFA setup recommended; no CLI command.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Info Banner */}
      <div className="mt-8 p-4 bg-green-100 rounded-lg">
        <p className="font-medium text-green-800">
          By carefully managing IAM identities, groups, roles, and policies following best practices including MFA and least privilege access, you greatly improve the security and manageability of your AWS environments.
        </p>
      </div>
    </div>
  );
};

export default IAMSection;
