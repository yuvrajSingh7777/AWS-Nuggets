import { useRef, useState } from "react";

const VPCSection = () => {
  // First video's state
  const videoRef1 = useRef(null);
  const [isPlaying1, setIsPlaying1] = useState(false);

  // Second video's state
  const videoRef2 = useRef(null);
  const [isPlaying2, setIsPlaying2] = useState(false);

  const handleVideoClick1 = () => {
    const video = videoRef1.current;
    if (video) {
      video.play();
      video.setAttribute("controls", "true");
      setIsPlaying1(true);
    }
  };

  const handleVideoClick2 = () => {
    const video = videoRef2.current;
    if (video) {
      video.play();
      video.setAttribute("controls", "true");
      setIsPlaying2(true);
    }
  };

  return (
    <div className="max-w-5xl dark:bg-gray-800 mx-auto p-6 bg-white rounded-lg shadow-lg mt-12 md:mt-15">
      <h1 className=" dark:text-gray-50 text-3xl sm:text-4xl flex gap-2 font-bold text-black"><span>&#10137;</span> AWS VPC Setup Guide</h1>

      {/* Video 1: VPC & VPC Peering */}
      <div className="mt-8 mb-8">
        <div className="rounded-xl overflow-hidden shadow w-full max-w-180 bg-blue-50 mx-auto">
          <div className="w-full aspect-video bg-black h-50 md:h-100 relative">
            <video
              ref={videoRef1} // Changed to videoRef1
              src="src/assets/SSYouTube.online_AWS VPC & VPC Peering  Lec-5 (Part-1)Project for DevOps & Cloud Engineers (hindi)_720p.mp4"
              className="w-full h-full"
              preload="none"
              onClick={handleVideoClick1} // Changed to handleVideoClick1
            />
            {!isPlaying1 && ( // Changed to isPlaying1
              <div
                onClick={handleVideoClick1} // Changed to handleVideoClick1
                className="absolute inset-0 flex items-center justify-center bg-none cursor-pointer"
              >
                <img
                  src="https://awsbuckyt.s3.eu-north-1.amazonaws.com/assets/lecture5(1).png"
                  alt="VPC Peering Thumbnail"
                  className="absolute w-full h-full object-fill"
                />
                <button className="cursor-pointer bg-gray-50 md:bg-transparent px-4 py-3.5 md:px-0 md:py-0 rounded-full text-black z-2 text-3xl md:text-6xl">▶</button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Video 2: VPC NAT Gateway */}
      <div className="mt-8 mb-8">
        <div className="rounded-xl overflow-hidden shadow w-full max-w-180 bg-blue-50 mx-auto">
          <div className="w-full aspect-video bg-black h-50 md:h-100 relative">
            <video
              ref={videoRef2} // Changed to videoRef2
              src="src/assets/SSYouTube.online_AWS_ VPC NAT Gateway Setup in Your VPC - A Step-by-Step Tutorial lec-5 (Part-2)_720p.mp4"
              className="w-full h-full"
              preload="none"
              onClick={handleVideoClick2} // Changed to handleVideoClick2
            />
            {!isPlaying2 && ( // Changed to isPlaying2
              <div
                onClick={handleVideoClick2} // Changed to handleVideoClick2
                className="absolute inset-0 flex items-center justify-center bg-none cursor-pointer"
              >
                <img
                  src="https://awsbuckyt.s3.eu-north-1.amazonaws.com/assets/lecture5(2).png"
                  alt="NAT Gateway Thumbnail"
                  className="absolute w-full h-full object-fill"
                />
                <button className="cursor-pointer bg-gray-50 md:bg-transparent px-4 py-3.5 md:px-0 md:py-0 rounded-full text-black z-2 text-3xl md:text-6xl">▶</button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* STEPS */}
      <div className="space-y-6">
        <div className="p-4 border-b border-blue-100 mb-6">
          <h2 className="text-2xl flex gap-1 sm:text-3xl font-semibold text-blue-500"><span>1.</span> Create VPC and Subnets</h2>
        </div>
        <div className="bg-blue-50 dark:bg-blue-100 p-4 rounded-lg">
          <h2 className="text-xl flex gap-1 font-semibold text-blue-700"><span>1.1</span> Launch your VPC</h2>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Log in to AWS Console and go to the VPC service.</li>
            <li>Click "Create VPC".</li>
            <li>Specify a Name tag (e.g., <code className="bg-white dark:bg-gray-100 px-1">MyVPC</code>) and an IPv4 CIDR block (e.g., <code className="bg-white dark:bg-gray-100 px-1">10.0.0.0/16</code>).</li>
            <li>Ensure the CIDR block does not overlap with other networks you plan to connect to.</li>
          </ul>
        </div>

        <div className="bg-blue-50 dark:bg-blue-100 p-4 rounded-lg">
          <h2 className="text-xl flex gap-1 font-semibold text-blue-700"><span>1.2</span> Create Subnets</h2>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Go to "Subnets" → "Create subnet".</li>
            <li>Create at least one **public subnet** (e.g., <code className="bg-white dark:bg-gray-100 px-1">10.0.1.0/24</code>) and one or more **private subnets** (e.g., <code className="bg-white dark:bg-gray-100 px-1">10.0.2.0/24</code>).</li>
            <li>Assign an Availability Zone for each subnet.</li>
          </ul>
        </div>

        <div className="bg-blue-50 dark:bg-blue-100 p-4 rounded-lg">
          <h2 className="text-xl flex gap-1 font-semibold text-blue-700"><span>1.3</span> Set up Internet Gateway (IGW)</h2>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Go to "Internet Gateways" → "Create internet gateway".</li>
            <li>Attach the newly created IGW to your VPC.</li>
          </ul>
        </div>

        <div className="bg-blue-50 dark:bg-blue-100 p-4 rounded-lg">
          <h2 className="text-xl flex gap-1 font-semibold text-blue-700"><span>1.4</span> Configure Route Tables for Public Subnet</h2>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Go to "Route Tables".</li>
            <li>Select the route table associated with your public subnet.</li>
            <li>Under "Routes" tab, click "Edit routes" → "Add route".</li>
            <li>Destination: <code className="bg-white dark:bg-gray-100 px-1">0.0.0.0/0</code>, Target: Your Internet Gateway.</li>
          </ul>
        </div>

        <div className="p-4 border-b border-green-100 mb-6 mt-8">
          <h2 className="text-2xl flex gap-1 sm:text-3xl font-semibold text-green-600"><span>2.</span> Create VPC Peering Connection</h2>
        </div>
        <div className="bg-green-50 dark:bg-green-100 p-4 rounded-lg">
          <h2 className="text-xl flex gap-1 font-semibold text-green-700"><span>2.1</span> Initiate Peering Request</h2>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Go to "Peering Connections" → "Create peering connection".</li>
            <li>Specify a name tag.</li>
            <li>Select your VPC as the "Requester VPC".</li>
            <li>For "Accepter VPC", provide the ID of the VPC you want to peer with. If it's in a different account or region, provide the AWS Account ID and select the correct region.</li>
            <li>Click "Create peering connection".</li>
          </ul>
        </div>

        <div className="bg-green-50 dark:bg-green-100 p-4 rounded-lg">
          <h2 className="text-xl flex gap-1 font-semibold text-green-700"><span>2.2</span> Accept Peering Connection</h2>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>The owner of the Accepter VPC must navigate to "Peering Connections", select the pending request, and click "Accept request".</li>
          </ul>
        </div>

        <div className="bg-green-50 dark:bg-green-100 p-4 rounded-lg">
          <h2 className="text-xl flex gap-1 font-semibold text-green-700"><span>2.3</span> Update Route Tables for Peering</h2>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>For **both** the Requester VPC and the Accepter VPC:</li>
            <li>Go to the route table(s) associated with the subnets that need to communicate across the peering connection.</li>
            <li>Add a route: Destination: The **CIDR block of the peer VPC**, Target: The VPC peering connection ID.</li>
          </ul>
        </div>

        <div className="bg-green-50 dark:bg-green-100 p-4 rounded-lg">
          <h2 className="text-xl flex gap-1 font-semibold text-green-700"><span>2.4</span> Modify Security Groups (Optional but Recommended)</h2>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Update security group rules in both VPCs to allow traffic (e.g., SSH, HTTP, All Traffic) from the peered VPC’s CIDR block.</li>
          </ul>
        </div>

        <div className="p-4 border-b border-yellow-100 mb-6 mt-8">
          <h2 className="text-2xl flex gap-1 sm:text-3xl font-semibold text-yellow-700"><span>3.</span> Set Up NAT Gateway</h2>
        </div>
        <div className="bg-yellow-50 dark:bg-yellow-100 p-4 rounded-lg">
          <h2 className="text-xl flex gap-1 font-semibold text-yellow-700"><span>3.1</span> Allocate an Elastic IP (EIP)</h2>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Go to "Elastic IPs" in the EC2 console → "Allocate Elastic IP address".</li>
          </ul>
        </div>

        <div className="bg-yellow-50 dark:bg-yellow-100 p-4 rounded-lg">
          <h2 className="text-xl flex gap-1 font-semibold text-yellow-700"><span>3.2</span> Create NAT Gateway</h2>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Go to "NAT Gateways" → "Create NAT gateway".</li>
            <li>Select the **public subnet** where the NAT Gateway will reside.</li>
            <li>Associate the Elastic IP you allocated earlier.</li>
          </ul>
        </div>

        <div className="bg-yellow-50 dark:bg-yellow-100 p-4 rounded-lg">
          <h2 className="text-xl flex gap-1 font-semibold text-yellow-700"><span>3.3</span> Configure Route Tables for Private Subnet(s)</h2>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Go to "Route Tables".</li>
            <li>Select the route table(s) associated with your **private subnets**.</li>
            <li>Under "Routes" tab, click "Edit routes" → "Add route".</li>
            <li>Destination: <code className="bg-white dark:bg-gray-100 px-1">0.0.0.0/0</code>, Target: Your NAT Gateway ID.</li>
            <li>This ensures instances in the private subnet can access the internet for updates/downloads but are not directly exposed.</li>
          </ul>
        </div>
      </div>

      {/* OPTIONAL COMMAND REFERENCE TABLE */}
      <div className="mt-8">
        <h2 className="text-xl dark:text-gray-50 font-bold mb-4">Command Reference</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-700">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 dark:border-gray-600 p-2 text-left">Step</th>
                <th className="border border-gray-300 dark:border-gray-600 p-2 text-left">CLI Command / Console Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-2 dark:text-gray-50">Create VPC</td>
                <td className="border border-gray-300 dark:border-gray-600 dark:text-gray-50 p-2 font-mono">
                  <code>aws ec2 create-vpc --cidr-block 10.0.0.0/16</code> (or Console)
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 dark:border-gray-600 p-2">Create Subnets</td>
                <td className="border border-gray-300 dark:border-gray-600 p-2 font-mono">
                  <code>aws ec2 create-subnet --vpc-id vpc-xxxx --cidr-block 10.0.1.0/24</code> (and for private)
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-2 dark:text-gray-50">Create IGW</td>
                <td className="border border-gray-300 dark:border-gray-600 dark:text-gray-50 p-2 font-mono">
                  <code>aws ec2 create-internet-gateway</code> then <code>attach-internet-gateway</code>
                </td>
              </tr>
              <tr className="bg-gray-50 ">
                <td className="border border-gray-300 dark:border-gray-600 p-2">Create Peering</td>
                <td className="border border-gray-300 dark:border-gray-600 p-2 font-mono">
                  <code>aws ec2 create-vpc-peering-connection --vpc-id vpc-requester --peer-vpc-id vpc-accepter</code>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-2 dark:text-gray-50">Create NAT Gateway</td>
                <td className="border border-gray-300 dark:border-gray-600 p-2 dark:text-gray-50 font-mono">
                  <code>aws ec2 create-nat-gateway --subnet-id subnet-xxxx --allocation-id eipalloc-xxxx</code>
                </td>
              </tr>
              <tr className="bg-gray-50 ">
                <td className="border border-gray-300 dark:border-gray-600 p-2">Add Route to RT</td>
                <td className="border border-gray-300 dark:border-gray-600 p-2 font-mono">
                  <code>aws ec2 create-route --route-table-id rtb-xxxx --destination-cidr-block 0.0.0.0/0 --gateway-id igw-xxxx</code> (or --nat-gateway-id, or --vpc-peering-connection-id)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* INFO BANNER */}
      <div className="mt-8 p-4 bg-green-100 rounded-lg">
        <p className="font-medium text-green-800">
          Your AWS VPC with Peering and NAT Gateway setup will establish a secure, scalable network architecture. Remember to keep CIDR blocks non-overlapping for peering to work!
        </p>
      </div>
    </div>
  );
};

export default VPCSection;
