import { useRef, useState } from "react";

const EBSSection = () => {
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
      <h1 className="text-3xl dark:text-gray-50 sm:text-4xl flex gap-2 font-bold text-black"><span>&#10137;</span> EBS Setup on EC2 Ubuntu</h1>

      <div className="mt-8 mb-8">
        <div className="rounded-xl overflow-hidden shadow w-full max-w-180 bg-blue-50 mx-auto">
          <div className="w-full aspect-video bg-black h-50 md:h-100 relative">
            <video
              ref={videoRef}
              src="https://awsbuckyt.s3.eu-north-1.amazonaws.com/assets/SSYouTube.online_AWS+EBS+Storage+Lec+-2_+Learn+Resizing+and+Backup+with+Real+Examples_720p.mp4"
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
                src="https://awsbuckyt.s3.eu-north-1.amazonaws.com/assets/lecture2.png"
                alt="Thumbnail"
                className="absolute w-full h-full object-fill"
              />
                <button className="cursor-pointer bg-gray-50 px-4 py-3.5 md:px-0 md:py-0 md:bg-transparent dark:border-gray-600 rounded-full text-black z-2 text-3xl md:text-6xl">▶</button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="p-4 pl-5 sm:pl-0 border-b mt-6 sm:mt-0 border-blue-100 mb-6">
        <h2 className="text-2xl flex gap-1 sm:text-3xl font-semibold text-blue-500"><span>1.</span> EBS Volume Setup (Video + Steps)</h2>
      </div>

      <div className="mb-8">
        <div className="rounded-xl overflow-hidden shadow w-full max-w-180 bg-blue-50 mx-auto">
          <div className="w-full aspect-video bg-black h-50 sm:h-100">
            <iframe
              src="https://awsbuckyt.s3.eu-north-1.amazonaws.com/assets/AWS+Tutorials+-+24+-+Create+First+Elastic+Block+Storage+Vol+_+Mount+EBS+in+Linux+_+AWS+Step+By+Step.mp4"
              title="AWS Tutorials - EBS Setup"
              className="w-full h-full"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-blue-50 dark:bg-blue-100 p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-blue-700">1. Launch or Select Your EC2 Instance</h2>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Go to the AWS EC2 dashboard.</li>
            <li>Launch a new Ubuntu instance or select an existing one.</li>
            <li><b>Note:</b> Your EBS volume and EC2 instance must be in the same Availability Zone.</li>
          </ul>
        </div>

        <div className="bg-green-50 dark:bg-green-100 p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-green-700">2. Create an EBS Volume</h2>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>In the EC2 dashboard, scroll to <b>Elastic Block Store</b> &gt; <b>Volumes</b>.</li>
            <li>Click <b>Create Volume</b>.</li>
            <li>Choose the <b>size</b>, <b>type</b>, and <b>Availability Zone</b> (must match your EC2 instance).</li>
            <li>Click <b>Create volume</b>.</li>
          </ul>
        </div>

        <div className="bg-yellow-50 dark:bg-yellow-100 p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-yellow-700">3. Attach the EBS Volume to Your EC2 Instance</h2>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Select the new volume in the Volumes list.</li>
            <li>Click <b>Actions</b> &gt; <b>Attach Volume</b>.</li>
            <li>Select your EC2 instance and confirm.</li>
            <li>Note the <b>device name</b> (e.g., <code className="font-mono bg-gray-100 px-1">/dev/xvdf</code>).</li>
          </ul>
        </div>

        <div className="bg-purple-50 dark:bg-purple-100 p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-purple-700">4. Connect to Your EC2 Instance via SSH</h2>
          <pre className="bg-gray-800 text-wrap text-gray-100 p-3 rounded mt-2">ssh -i /path/to/key.pem ubuntu@EC2_PUBLIC_IP</pre>
        </div>

        <div className="bg-red-50 dark:bg-red-100 p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-red-700">5. Identify the New Volume</h2>
          <pre className="bg-gray-800 text-gray-100 p-3 rounded mt-2">sudo lsblk</pre>
          <p className="mt-2">You should see a device like <code className="font-mono bg-gray-100 px-1">/dev/xvdf</code>.</p>
        </div>

        <div className="bg-indigo-50 dark:bg-indigo-100 p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-indigo-700">6. Create a Filesystem on the Volume</h2>
          <pre className="bg-gray-800 text-gray-100 p-3 rounded mt-2">sudo mkfs -t xfs /dev/xvdf</pre>
          <p className="mt-2 text-sm italic">For ext4: <code>sudo mkfs.ext4 /dev/xvdf</code></p>
          <p className="mt-2 text-sm italic"><b>Warning:</b> This will erase any existing data.</p>
        </div>

        <div className="bg-teal-50 dark:bg-teal-100 p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-teal-700">7. Create a Mount Point and Mount the Volume</h2>
          <pre className="bg-gray-800 text-wrap text-gray-100 p-3 rounded mt-2">sudo mkdir /ebs
sudo mount /dev/xvdf /ebs</pre>
        </div>

        <div className="bg-pink-50 dark:bg-pink-100 p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-pink-700">8. (Optional) Test the Volume</h2>
          <pre className="bg-gray-800 text-wrap text-gray-100 p-3 rounded mt-2">echo "Amazon EBS" | sudo tee /ebs/readme.txt
ls /ebs
sudo cat /ebs/readme.txt</pre>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-700">9. Make the Mount Persistent (After Reboot)</h2>
          <pre className="bg-gray-800 text-gray-100 p-3 rounded mt-2">sudo blkid /dev/xvdf</pre>
          <p className="mt-2">Edit <code className="font-mono bg-gray-100 px-1">/etc/fstab</code>:</p>
          <pre className="bg-gray-800 text-gray-100 p-3 rounded mt-2">sudo nano /etc/fstab</pre>
          <p className="mt-2">Add this line (replace UUID):</p>
          <pre className="bg-gray-800 text-wrap text-gray-100 p-3 rounded mt-2">UUID=xxxx    /ebs    xfs    defaults,nofail    0    2</pre>
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
                <td className="border dark:border-gray-600 dark:text-gray-50 border-gray-300 p-2">Identify new device</td>
                <td className="border dark:border-gray-600 dark:text-gray-50 border-gray-300 p-2 font-mono">sudo lsblk</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border dark:border-gray-600 border-gray-300 p-2">Format (XFS)</td>
                <td className="border dark:border-gray-600 border-gray-300 p-2 font-mono">sudo mkfs -t xfs /dev/xvdf</td>
              </tr>
              <tr>
                <td className="border dark:border-gray-600 dark:text-gray-50 border-gray-300 p-2">Create mount point</td>
                <td className="border dark:border-gray-600 dark:text-gray-50 border-gray-300 p-2 font-mono">sudo mkdir /ebs</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border dark:border-gray-600 border-gray-300 p-2">Mount volume</td>
                <td className="border dark:border-gray-600 border-gray-300 p-2 font-mono">sudo mount /dev/xvdf /ebs</td>
              </tr>
              <tr>
                <td className="border dark:border-gray-600 dark:text-gray-50 border-gray-300 p-2">Get UUID</td>
                <td className="border dark:border-gray-600 dark:text-gray-50 border-gray-300 p-2 font-mono">sudo blkid /dev/xvdf</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border dark:border-gray-600 border-gray-300 p-2">Edit fstab</td>
                <td className="border dark:border-gray-600 border-gray-300 p-2 font-mono">sudo nano /etc/fstab</td>
              </tr>
              <tr>
                <td className="border dark:border-gray-600 dark:text-gray-50 border-gray-300 p-2">Add to fstab</td>
                <td className="border dark:border-gray-600 dark:text-gray-50 border-gray-300 p-2 font-mono">UUID=xxxx /ebs xfs defaults,nofail 0 2</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-8 p-4 bg-green-100 rounded-lg">
        <p className="font-medium text-green-800">
          Your EBS volume is now ready! Data persists even after instance termination.<br />
          Mount point: <code className="font-mono bg-green-200 px-1 mx-1">/ebs</code>
        </p>
        <p className="mt-2 text-green-700">
          <strong>Tips:</strong> Always double-check the device name before formatting.<br />
          Take regular snapshots for backups and volume migration.
        </p>
      </div>
    </div>
  )
}

export default EBSSection