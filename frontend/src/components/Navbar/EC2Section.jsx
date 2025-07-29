import { useRef, useState } from "react";

const EC2Section = () => {

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
      <h1 className="text-3xl sm:text-4xl font-bold dark:text-gray-50 text-black">&#10137; EC2 Service</h1>

      <div className="mt-8 mb-8">
        <div className="rounded-xl overflow-hidden shadow w-full max-w-180 bg-blue-50 mx-auto">
          <div className="w-full aspect-video bg-black h-50 md:h-100 relative">
            <video
              ref={videoRef}
              src="src/assets/SSYouTube.online_AWS EC2 Instance Lec-1_ A Complete Beginner’s Guide [HINDI]_720p.mp4"
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
                src="https://awsbuckyt.s3.eu-north-1.amazonaws.com/assets/lecture1.png"
                alt="Thumbnail"
                className="absolute w-full h-full object-fill"
              />
                <button className="cursor-pointer bg-gray-50 md:bg-transparent px-4 py-3.5 md:px-0 md:py-0 rounded-full text-black z-2 text-3xl md:text-6xl">▶</button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="p-4 border-b border-blue-100 mb-6">
        <h2 className="text-2xl flex gap-1 sm:text-3xl font-semibold text-blue-500"><span>1.</span>Apache Web Server Setup (Video + Steps)</h2>
      </div>
      <div className="mb-8">
        <div className="rounded-xl overflow-hidden shadow w-full max-w-180 bg-blue-50 mx-auto">
          <div className="w-full aspect-video bg-black h-50 md:h-100">
            <iframe
              src="https://awsbuckyt.s3.eu-north-1.amazonaws.com/assets/How+to+Set+Up+Apache+Web+Server+in+AWS+EC2+Linux+(Ubuntu)+Instance_+_+Install+web+server+in+AWS+2023.mp4"
              title="Apache on AWS EC2 Tutorial"
              className="w-full h-full"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-blue-50 dark:bg-blue-100 p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-blue-700">1. Launch EC2 Instance</h2>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Select <span className="font-mono bg-white dark:bg-gray-100 px-1">Ubuntu 22.04 LTS</span> AMI</li>
            <li>Configure security group to allow SSH (port 22) and HTTP (port 80)</li>
            <li>Create/download SSH key pair (.pem file)</li>
          </ul>
        </div>

        <div className="bg-green-50 dark:bg-green-100 p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-green-700">2. Connect via SSH</h2>
          <p className="font-medium mt-2">Run in terminal:</p>
          <pre className="bg-gray-800 text-gray-100 p-3 rounded mt-1 text-wrap">ssh -i /path/to/key.pem ubuntu@EC2_PUBLIC_IP</pre>
        </div>

        <div className="bg-yellow-50 dark:bg-yellow-100 p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-yellow-700">3. Update System</h2>
          <pre className="bg-gray-800 text-gray-100 p-3 rounded mt-2">sudo apt update</pre>
        </div>

        <div className="bg-purple-50 dark:bg-purple-100 p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-purple-700">4. Install Apache</h2>
          <pre className="bg-gray-800 text-gray-100 p-3 rounded mt-2">sudo apt install apache2 -y</pre>
        </div>

        <div className="bg-red-50 dark:bg-red-100 p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-red-700">5. Configure Firewall</h2>
          <pre className="bg-gray-800 text-gray-100 p-3 rounded mt-2">sudo ufw allow 'Apache'</pre>
        </div>

        <div className="bg-indigo-50 dark:bg-indigo-100 p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-indigo-700">6. Start & Enable Service</h2>
          <pre className="bg-gray-800 text-gray-100 p-3 rounded">sudo systemctl start apache2</pre>
          <pre className="bg-gray-800 text-gray-100 p-3 rounded mt-2">sudo systemctl enable apache2</pre>
        </div>

        <div className="bg-teal-50 dark:bg-teal-100 p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-teal-700">7. Verify Installation</h2>
          <p className="mt-2">Visit <span className="font-mono bg-white dark:bg-gray-100 px-1">http://EC2_PUBLIC_IP</span> in browser</p>
        </div>

        <div className="bg-pink-50 dark:bg-pink-100 p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-pink-700">8. Virtual Hosts (Optional)</h2>
          <pre className="bg-gray-800 text-wrap text-gray-100 p-3 rounded mt-2">sudo nano /etc/apache2/sites-available/your_domain.conf</pre>
          <pre className="bg-gray-800 text-gray-100 p-3 rounded mt-2">sudo a2ensite your_domain.conf</pre>
          <pre className="bg-gray-800 text-gray-100 p-3 rounded mt-2">sudo systemctl reload apache2</pre>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl dark:text-gray-50 font-bold mb-4">Command Reference</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border dark:border-gray-600 p-2 text-left">Step</th>
                <th className="border dark:border-gray-600 p-2 text-left">Command</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border dark:border-gray-600 dark:text-gray-50 p-2">System Update</td>
                <td className="border dark:border-gray-600 dark:text-gray-50 p-2 font-mono">sudo apt update</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border dark:border-gray-600 p-2">Install Apache</td>
                <td className="border dark:border-gray-600 p-2 font-mono">sudo apt install apache2 -y</td>
              </tr>
              <tr>
                <td className="border dark:border-gray-600 dark:text-gray-50 p-2">Firewall Config</td>
                <td className="border dark:border-gray-600 dark:text-gray-50 p-2 font-mono">sudo ufw allow 'Apache'</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border dark:border-gray-600 p-2">Service Management</td>
                <td className="border dark:border-gray-600 p-2 font-mono">sudo systemctl [start|stop|reload] apache2</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-8 p-4 bg-green-100 rounded-lg">
        <p className="font-medium text-green-800">
          Your Apache server is now running on AWS EC2!
          Upload files to <span className="font-mono bg-green-200 px-1 mx-1">/var/www/html</span> to serve web content.
        </p>
      </div>
    </div>
  )
}

export default EC2Section