const SSHSection = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 dark:bg-gray-800 bg-white rounded-lg shadow-lg mt-12 md:mt-15">
      <h1 className="text-3xl sm:text-4xl flex dark:text-gray-50 gap-2 font-bold text-black"><span>&#10137;</span> SSH into AWS EC2 Ubuntu Instance</h1>

      <div className="p-4 pl-5 sm:pl-0 border-b mt-6 sm:mt-0 border-blue-100 mb-6">
        <h2 className="text-2xl flex gap-1 sm:text-3xl font-semibold text-blue-500"><span>1.</span> Connect via SSH (Video + Steps)</h2>
      </div>

      <div className="mb-8">
        <div className="rounded-xl overflow-hidden shadow w-full max-w-180 bg-blue-50 mx-auto">
          <div className="w-full aspect-video bg-black h-50 sm:h-100">
            <video controls className="w-full h-full">
              <source src="https://awsbuckyt.s3.eu-north-1.amazonaws.com/assets/SSYouTube.online_AWS+Connect+EC2+Ubuntu+Instance+Using+SSH+Client+Part-05+_+Ubuntu+Terminal+_+Dot+Pem+File_1080p.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-blue-50 dark:bg-blue-100 p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-blue-700">1. Prerequisites</h2>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>An AWS EC2 Ubuntu instance (launched with a key pair)</li>
            <li>Private key file (<span className="font-mono bg-gray-100 px-1">.pem</span>) from instance launch</li>
            <li>Public DNS or IP address of your EC2 instance</li>
            <li>Security group allowing inbound SSH (port 22) from your IP</li>
          </ul>
        </div>

        <div className="bg-green-50 dark:bg-green-100 p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-green-700">2. Set Permissions for Your Private Key</h2>
          <pre className="bg-gray-800 text-gray-100 p-3 rounded mt-2">
chmod 400 path/to/your-key.pem</pre>
          <p className="mt-2">This ensures only your user can read the key file (required by SSH).</p>
        </div>

        <div className="bg-yellow-50 dark:bg-yellow-100 p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-yellow-700">3. Locate Instance Details</h2>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li><b>Username:</b> <span className="font-mono bg-gray-100 px-1">ubuntu</span></li>
            <li><b>Public DNS/IP:</b> From EC2 console under "Public IPv4 address" or "Public DNS (IPv4)"</li>
          </ul>
        </div>

        <div className="bg-purple-50 dark:bg-purple-100 p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-purple-700">4. Connect Using SSH</h2>
          <pre className="bg-gray-800 text-gray-100 text-wrap p-3 rounded mt-2">
ssh -i path/to/your-key.pem ubuntu@&lt;instance-public-dns&gt;</pre>
          <p className="mt-2">Replace <code>path/to/your-key.pem</code> and <code>&lt;instance-public-dns&gt;</code> appropriately.</p>
        </div>

        <div className="bg-red-50 dark:bg-red-100 p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-red-700">5. First Connection Security Prompt</h2>
          <p className="mt-2">
            You may see:<br/>
            <code className="font-mono bg-gray-100 px-1">The authenticity of host 'ec2-...' can't be established...</code>
          </p>
          <p className="mt-2">Type <code>yes</code> and press Enter.</p>
        </div>

        <div className="bg-indigo-50 dark:bg-indigo-100 p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-indigo-700">6. Troubleshooting</h2>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li><b>Permission denied:</b> Check key file permissions and username.</li>
            <li><b>Timeout:</b> Ensure your security group allows SSH from your IP.</li>
            <li><b>Key not accepted:</b> Make sure you use the correct key pair.</li>
          </ul>
        </div>

        <div className="bg-teal-50 dark:bg-teal-100 p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-teal-700">7. (Optional) Using AWS CLI to Find Instance Info</h2>
          <pre className="bg-gray-800 text-gray-100 p-3 rounded mt-2 text-wrap ">
aws ec2 describe-instances --instance-ids &lt;your-instance-id&gt; --query "Reservations[*].Instances[*]<br></br>.PublicDnsName" --output text</pre>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl dark:text-gray-50 font-bold mb-4">Command Reference</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border dark:border-gray-600 border-gray-300 p-2 text-left">Step</th>
                <th className="border dark:border-gray-600 border-gray-300 p-2 text-left">Command/Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border dark:border-gray-600 border-gray-300 dark:text-gray-50 p-2">Set key permissions</td>
                <td className="border dark:border-gray-600 border-gray-300 dark:text-gray-50 p-2 font-mono">chmod 400 path/to/your-key.pem</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border dark:border-gray-600 border-gray-300 p-2">SSH into instance</td>
                <td className="border dark:border-gray-600 border-gray-300 p-2 font-mono">ssh -i path/to/your-key.pem ubuntu@&lt;instance-public-dns&gt;</td>
              </tr>
              <tr>
                <td className="border dark:border-gray-600 border-gray-300 dark:text-gray-50 p-2">Username (Ubuntu)</td>
                <td className="border dark:border-gray-600 border-gray-300 dark:text-gray-50 p-2 font-mono">ubuntu</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border dark:border-gray-600 border-gray-300 p-2">Check port 22 open</td>
                <td className="border dark:border-gray-600 border-gray-300 p-2">Check security group in AWS console</td>
              </tr>
              <tr>
                <td className="border dark:border-gray-600 border-gray-300 dark:text-gray-50 p-2">Find public DNS via CLI</td>
                <td className="border dark:border-gray-600 border-gray-300 dark:text-gray-50 p-2 font-mono">aws ec2 describe-instances --instance-ids &lt;your-instance-id&gt; --query "Reservations[*].Instances[*].PublicDnsName" --output text</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-8 p-4 bg-green-100 rounded-lg">
        <p className="font-medium text-green-800">
          You are now ready to connect to your AWS EC2 Ubuntu instance using SSH!<br />
          Always keep your private key secure and never share it.
        </p>
        <p className="mt-2 text-green-700">
          <strong>Tips:</strong> For repeated connections, consider using SSH config files.<br />
          Always restrict SSH access in your security group to trusted IPs.
        </p>
      </div>
    </div>
  )
}

export default SSHSection