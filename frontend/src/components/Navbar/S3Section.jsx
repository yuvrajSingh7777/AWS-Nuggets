import { useRef, useState } from "react";

const S3Section = () => {
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
      <h1 className=" dark:text-gray-50 text-3xl sm:text-4xl flex gap-2 font-bold text-black"><span>&#10137;</span> AWS S3 Bucket Setup & Usage</h1>

      <div className="mt-8 mb-8">
        <div className="rounded-xl overflow-hidden shadow w-full max-w-180 bg-blue-50 mx-auto">
          <div className="w-full aspect-video bg-black h-50 md:h-100 relative">
            <video
              ref={videoRef}
              src="src/assets/SSYouTube.online_AWS S3 Lec-3 _ Hands-on tutorial for Beginners _ Hindi video on AWS S3_720p.mp4"
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
                src="https://awsbuckyt.s3.eu-north-1.amazonaws.com/assets/lecture3.png"
                alt="Thumbnail"
                className="absolute w-full h-full object-fill"
              />
                <button className="cursor-pointer bg-gray-50 px-4 py-3.5 md:px-0 md:py-0 md:bg-transparent rounded-full text-black z-2 text-3xl md:text-6xl">▶</button>
              </div>
            )}
          </div>
        </div>
      </div>


       <div className="p-4 pl-5 sm:pl-0 border-b mt-6 sm:mt-0 border-blue-100 mb-6">
        <h2 className="text-2xl flex gap-1 sm:text-3xl font-semibold text-blue-500"><span>1.</span> S3 Bucket Creation & Object Upload (Video + Steps)</h2>
      </div>

      <div className="mb-8">
        <div className="rounded-xl overflow-hidden shadow w-full max-w-180 bg-blue-50 mx-auto">
          <div className="w-full aspect-video bg-black h-50 md:h-100">
            <video controls className="w-full h-full">
              <source src="https://awsbuckyt.s3.eu-north-1.amazonaws.com/assets/SSYouTube.online_How+to+create+S3+bucket+in+AWS_1080p.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-blue-50 dark:bg-blue-100 p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-blue-700">1. Open S3 Service</h2>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>In the AWS Console search bar, type <b>S3</b> and select the S3 service.</li>
          </ul>
        </div>

        <div className="bg-green-50 dark:bg-green-100 p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-green-700">2. Create a New Bucket</h2>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Click the <b>Create bucket</b> button.</li>
            <li>Enter a unique bucket name (only lowercase letters, numbers, and hyphens allowed).</li>
            <li>Select the region closest to your users.</li>
            <li>Set options as needed (versioning, encryption, tags, etc.).</li>
            <li>Click <b>Create bucket</b>.</li>
          </ul>
        </div>

        <div className="bg-yellow-50 dark:bg-yellow-100 p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-yellow-700">3. Upload Files</h2>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Click on your bucket.</li>
            <li>Click the <b>Upload</b> button.</li>
            <li>Drag & drop files or use <b>Add files</b> to select files.</li>
            <li>Set permissions and properties if needed.</li>
            <li>Click <b>Upload</b>.</li>
          </ul>
        </div>

        <div className="bg-purple-50 dark:bg-purple-100 p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-purple-700">4. Manage Objects</h2>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>After upload, files will appear in the bucket.</li>
            <li>Click any file to view its <b>Object URL</b> (if public, direct access is possible).</li>
            <li>You can create folders, set lifecycle rules, and manage permissions.</li>
          </ul>
        </div>

        <div className="bg-red-50 dark:bg-red-100 p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-red-700">5. (Optional) Set Bucket Policies & Permissions</h2>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Go to the <b>Permissions</b> tab.</li>
            <li>Here you can set bucket policies, public access settings, or CORS rules.</li>
            <li>By default, the bucket is private; give access as needed.</li>
          </ul>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl dark:text-gray-50 font-bold mb-4">Command Reference / Console Actions</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border dark:border-gray-600 border-gray-300 p-2 text-left">Step</th>
                <th className="border dark:border-gray-600 border-gray-300 p-2 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border dark:border-gray-600 dark:text-gray-50 border-gray-300 p-2">Open S3 Service</td>
                <td className="border dark:border-gray-600 dark:text-gray-50 border-gray-300 p-2">AWS Console &gt; Search "S3" &gt; Select S3</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border dark:border-gray-600 border-gray-300 p-2">Create a New Bucket</td>
                <td className="border dark:border-gray-600 border-gray-300 p-2">Create bucket &gt; Name & Region &gt; Options &gt; Create</td>
              </tr>
              <tr>
                <td className="border dark:border-gray-600 dark:text-gray-50 border-gray-300 p-2">Upload Files</td>
                <td className="border dark:border-gray-600 dark:text-gray-50 border-gray-300 p-2">Select bucket &gt; Upload &gt; Add files &gt; Upload</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border dark:border-gray-600 border-gray-300 p-2">Manage Objects</td>
                <td className="border dark:border-gray-600 border-gray-300 p-2">Object list &gt; Click file &gt; Copy Object URL</td>
              </tr>
              <tr>
                <td className="border dark:border-gray-600 dark:text-gray-50 border-gray-300 p-2">Set Permissions</td>
                <td className="border dark:border-gray-600 dark:text-gray-50 border-gray-300 p-2">Permissions tab &gt; Edit policies / access</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-8 p-4 bg-green-100 rounded-lg">
        <p className="font-medium text-green-800">
          Your S3 bucket is now ready! Store files securely and manage access as needed.<br />
          <span className="font-mono bg-green-200 px-1 mx-1">Tip:</span> For automation, you can also use AWS CLI or SDK.
        </p>
        <p className="mt-2 text-green-700">
          <strong>Best Practices:</strong> Enable versioning, set lifecycle rules, and always keep sensitive data private.
        </p>
      </div>
    </div>
  )
}

export default S3Section