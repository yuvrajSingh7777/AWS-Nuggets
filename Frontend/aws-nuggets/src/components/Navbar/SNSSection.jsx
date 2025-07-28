const SNSSection = () => {
  return (
    <div className="max-w-5xl mx-auto dark:bg-gray-800 p-6 bg-white rounded-lg shadow-lg mt-12 md:mt-15">
      <h1 className="text-3xl sm:text-4xl dark:text-gray-50 flex gap-2 font-bold text-black"><span>&#10137;</span> AWS SNS Setup & Usage</h1>

      <div className="p-4 pl-5 sm:pl-0 border-b mt-6 sm:mt-0 border-blue-100 mb-6">
        <h2 className="text-2xl flex gap-1 sm:text-3xl font-semibold text-blue-500"><span>1.</span> SNS Topic Creation & Notifications (Video + Steps)</h2>
      </div>

      <div className="mb-8">
        <div className="rounded-xl overflow-hidden shadow w-full max-w-180 bg-blue-50 mx-auto">
          <div className="w-full aspect-video bg-black h-50 md:h-100">
            <video controls className="w-full h-full">
              <source src="https://awsbuckyt.s3.eu-north-1.amazonaws.com/assets/SSYouTube.online_How+to+create+SNS+Topic+in+AWS_1080p.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-blue-50 dark:bg-blue-100 p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-blue-700">1. Open SNS Service</h2>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>In AWS Console, search for <b>SNS</b> and select <b>Simple Notification Service</b>.</li>
          </ul>
        </div>

        <div className="bg-green-50 dark:bg-green-100 p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-green-700">2. Create a Topic</h2>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Click <b>Create topic</b>.</li>
            <li>Choose <b>Standard</b> (most common) or <b>FIFO</b> (for strict ordering).</li>
            <li>Enter a unique <b>Topic name</b>.</li>
            <li>Configure optional settings (encryption, access policy).</li>
            <li>Click <b>Create topic</b>.</li>
          </ul>
        </div>

        <div className="bg-yellow-50 dark:bg-yellow-100 p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-yellow-700">3. Add Subscriptions</h2>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>On your topic page, click <b>Create subscription</b>.</li>
            <li>Select a <b>Protocol</b> (Email, SMS, SQS, Lambda, etc.).</li>
            <li>Enter the <b>Endpoint</b> (email address, phone number, Lambda ARN, etc.).</li>
            <li>Click <b>Create subscription</b>.</li>
          </ul>
        </div>

        <div className="bg-purple-50 dark:bg-purple-100 p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-purple-700">4. Confirm Subscriptions</h2>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li><b>Email/SMS:</b> Check your inbox/phone for confirmation message.</li>
            <li>Click confirmation link or follow instructions to activate.</li>
            <li>Other protocols (SQS/Lambda) auto-confirm.</li>
          </ul>
        </div>

        <div className="bg-red-50 dark:bg-red-100 p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-red-700">5. Publish Messages</h2>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>On topic page, click <b>Publish message</b>.</li>
            <li>Enter <b>Subject</b> and <b>Message</b>.</li>
            <li>Configure message attributes if needed.</li>
            <li>Click <b>Publish message</b> to notify all subscribers.</li>
          </ul>
        </div>

        <div className="bg-indigo-50 dark:bg-indigo-100 p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-indigo-700">6. (Optional) Manage Topics</h2>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li><b>Delete subscription:</b> Select subscription → Delete.</li>
            <li><b>Delete topic:</b> Topic → Delete topic.</li>
            <li><b>Modify access:</b> Edit topic's access policy.</li>
          </ul>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl dark:text-gray-50 font-bold mb-4">Command Reference / Console Actions</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-2 text-left">Step</th>
                <th className="border border-gray-300 p-2 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border dark:border-gray-600 border-gray-300 dark:text-gray-50 p-2">Open SNS</td>
                <td className="border dark:border-gray-600 border-gray-300 dark:text-gray-50 p-2">AWS Console → Search "SNS" → Select</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border dark:border-gray-600 border-gray-300 p-2">Create Topic</td>
                <td className="border dark:border-gray-600 border-gray-300 p-2">Create topic → Name → Type → Create</td>
              </tr>
              <tr>
                <td className="border dark:border-gray-600 border-gray-300 dark:text-gray-50 p-2">Add Subscription</td>
                <td className="border dark:border-gray-600 border-gray-300 dark:text-gray-50 p-2">Topic → Create subscription → Protocol & Endpoint → Create</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border dark:border-gray-600 border-gray-300 p-2">Confirm Subscription</td>
                <td className="border dark:border-gray-600 border-gray-300 p-2">Check email/SMS → Confirm</td>
              </tr>
              <tr>
                <td className="border dark:border-gray-600 border-gray-300 dark:text-gray-50 p-2">Publish Message</td>
                <td className="border dark:border-gray-600 border-gray-300 dark:text-gray-50 p-2">Topic → Publish message → Enter content → Publish</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border dark:border-gray-600 border-gray-300 p-2">Delete Topic</td>
                <td className="border dark:border-gray-600 border-gray-300 p-2">Topic → Delete topic</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-8 p-4 bg-green-100 rounded-lg">
        <p className="font-medium text-green-800">
          Your SNS topic is now active! Send notifications to email, SMS, apps, and other AWS services.<br />
          <span className="font-mono bg-green-200 px-1 mx-1">Tip:</span> Use SNS with CloudWatch for alerting.
        </p>
        <p className="mt-2 text-green-700">
          <strong>Best Practices:</strong> Set up dead-letter queues for failed deliveries, use message filtering, and restrict access with IAM policies.
        </p>
      </div>
    </div>
  )
}

export default SNSSection