import { useRef, useState } from "react";

const AutoScalingSection = () => {
  // First video state
  const videoRef1 = useRef(null);
  const [isPlaying1, setIsPlaying1] = useState(false);

  // Second video state
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

      <h1 className="text-3xl  sm:text-4xl font-bold dark:text-gray-50 text-black flex gap-2 items-center">
        <span className="mb-18 sm:mb-0">&#10137;</span> AWS ELB, Auto Scaling, and Load Balancer Setup Guide
      </h1>

      {/* Video 1 */}
      <div className="mt-8 mb-8">
        <div className="rounded-xl overflow-hidden shadow w-full max-w-180 bg-blue-50 mx-auto">
          <div className="relative w-full aspect-video bg-black h-50 md:h-100">
            <video
              ref={videoRef1}
              src="src/assets/SSYouTube.online_AWS ELB & Auto Scaling Groups Explained_ Practical Examples for Beginners! [HINDI]  Lec-6(Part-1)_720p.mp4" // Replace with your first video path
              className="w-full h-full"
              preload="none"
              onClick={handleVideoClick1}
            />
            {!isPlaying1 && (
              <div
                onClick={handleVideoClick1}
                className="absolute inset-0 flex items-center justify-center bg-none cursor-pointer"
              >
                <img
                  src="https://awsbuckyt.s3.eu-north-1.amazonaws.com/assets/lecture6(1).png"
                  alt="ELB and Auto Scaling Intro"
                  className="absolute w-full h-full object-cover"
                />
                <button className="z-20 text-3xl md:text-6xl rounded-full cursor-pointer bg-gray-50 md:bg-transparent px-4 py-3.5 md:px-0 md:py-0 text-black">
                  ▶
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Video 2 */}
      <div className="mt-8 mb-8">
        <div className="rounded-xl overflow-hidden shadow w-full max-w-180 bg-blue-50 mx-auto">
          <div className="relative w-full aspect-video bg-black h-50 md:h-100">
            <video
              ref={videoRef2}
              src="src/assets/SSYouTube.online_AWS EC2 Auto Scaling _ Step By Step Tutorial Explained_ Practical Examples for Beginners (part-2)_720p.mp4" // Replace with your second video path
              className="w-full h-full"
              preload="none"
              onClick={handleVideoClick2}
            />
            {!isPlaying2 && (
              <div
                onClick={handleVideoClick2}
                className="absolute inset-0 flex items-center justify-center bg-none cursor-pointer"
              >
                <img
                  src="https://awsbuckyt.s3.eu-north-1.amazonaws.com/assets/lecture6(2).png"
                  alt="Auto Scaling Group & Load Balancer Setup"
                  className="absolute w-full h-full object-cover"
                />
                <button className="z-20 text-3xl md:text-6xl rounded-full cursor-pointer bg-gray-50 md:bg-transparent px-4 py-3.5 md:px-0 md:py-0 text-black">
                  ▶
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Steps */}
      <div className="space-y-6">

        {/* Step 1 */}
        <div className="p-4 border-b border-blue-100 mb-6">
          <h2 className="text-2xl flex gap-1 sm:text-3xl font-semibold text-blue-500"><span>1.</span> Prepare Your Environment</h2>
        </div>
        <div className="bg-blue-50 dark:bg-blue-100 p-4 rounded-lg">
          <ul className="list-disc pl-6 space-y-1">
            <li>Sign in to the AWS Management Console.</li>
            <li>Choose your target AWS Region.</li>
            <li>Ensure you have a VPC and subnets configured across multiple Availability Zones for high availability.</li>
            <li>(Optional) Create a security group allowing necessary ports (e.g., HTTP/80, HTTPS/443).</li>
          </ul>
        </div>

        {/* Step 2 */}
        <div className="p-4 border-b border-green-100 mb-6 mt-8">
          <h2 className="text-2xl flex gap-1 sm:text-3xl font-semibold text-green-600"><span>2.</span> Create a Launch Template or Launch Configuration</h2>
        </div>
        <div className="bg-green-50 dark:bg-green-100 p-4 rounded-lg">
          <ul className="list-disc pl-6 space-y-1">
            <li>Navigate to <em>EC2 Dashboard → Launch Templates</em> (recommended) or <em>Launch Configurations</em>.</li>
            <li>Click <strong>Create Launch Template</strong>:</li>
            <ul className="pl-6 list-disc space-y-1">
              <li>Provide a Name for identification.</li>
              <li>Select an AMI (e.g., Amazon Linux 2).</li>
              <li>Choose an Instance Type (e.g., t3.micro for free-tier).</li>
              <li>Configure key pair, security groups, and other settings as needed.</li>
              <li>Note: Launch templates provide versioning and more flexibility.</li>
            </ul>
          </ul>
        </div>

        {/* Step 3 */}
        <div className="p-4 border-b border-yellow-100 mb-6 mt-8">
          <h2 className="text-2xl flex gap-1 sm:text-3xl font-semibold text-yellow-700"><span>3.</span> Create an Elastic Load Balancer (ELB)</h2>
        </div>
        <div className="bg-yellow-50 dark:bg-yellow-100 p-4 rounded-lg">
          <ul className="list-disc pl-6 space-y-1">
            <li>Navigate to <em>EC2 → Load Balancers</em>.</li>
            <li>Click <strong>Create Load Balancer</strong>.</li>
            <li>Choose type:
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>Application Load Balancer (ALB) for HTTP and HTTPS traffic, routing based on path or host.</li>
                <li>Network Load Balancer (NLB) for ultra-low latency and TCP traffic.</li>
                <li>Classic Load Balancer (older, less commonly used).</li>
              </ul>
            </li>
            <li>Configure:
              <ul className="pl-6 list-disc space-y-1">
                <li>Name the load balancer.</li>
                <li>Select VPC and Availability Zones/subnets.</li>
                <li>Configure Listeners (e.g., port 80 HTTP).</li>
                <li>Set security groups allowing inbound traffic on listener ports.</li>
              </ul>
            </li>
            <li>Define Target Groups:
              <ul className="pl-6 list-disc space-y-1">
                <li>Register targets by instance IDs or IP addresses.</li>
                <li>Target group is what the Auto Scaling group attaches to.</li>
              </ul>
            </li>
            <li>Review and create the load balancer.</li>
          </ul>
        </div>

        {/* Step 4 */}
        <div className="p-4 border-b border-indigo-100 mb-6 mt-8">
          <h2 className="text-2xl flex gap-1 sm:text-3xl font-semibold text-indigo-700"><span>4.</span> Create an Auto Scaling Group (ASG)</h2>
        </div>
        <div className="bg-indigo-50 dark:bg-indigo-100 p-4 rounded-lg">
          <ul className="list-disc pl-6 space-y-1">
            <li>Navigate to <em>EC2 → Auto Scaling Groups</em>.</li>
            <li>Click <strong>Create Auto Scaling group</strong>.</li>
            <li>Select the launch template or launch configuration created earlier.</li>
            <li>Enter an Auto Scaling group name.</li>
            <li>Select VPC and subnets (must cover subnets where Load Balancer is enabled).</li>
            <li>Under Load balancing, select <em>Attach to an existing load balancer</em> and choose the relevant Load Balancer or Target Group.</li>
            <li>(Optional) Configure Health Checks:
              <ul className="pl-6 list-disc space-y-1">
                <li>Enable Elastic Load Balancing health checks to detect unhealthy instances and replace them automatically.</li>
              </ul>
            </li>
            <li>Set Desired Capacity, Min, and Max instances to control scaling limits.</li>
            <li>Configure Advanced Options as needed.</li>
          </ul>
        </div>

        {/* Step 5 */}
        <div className="p-4 border-b border-pink-100 mb-6 mt-8">
          <h2 className="text-2xl flex gap-1 sm:text-3xl font-semibold text-pink-700"><span>5.</span> Configure Scaling Policies (Optional but Recommended)</h2>
        </div>
        <div className="bg-pink-50 dark:bg-pink-100 p-4 rounded-lg">
          <ul className="list-disc pl-6 space-y-1">
            <li>Define when and how your ASG should automatically add or remove instances.</li>
            <li>Types of policies:
              <ul className="pl-6 list-disc space-y-1">
                <li>Target Tracking Scaling: Keeps a metric (e.g., CPU utilization) near a target value.</li>
                <li>Simple Scaling: Adds/removes capacity based on CloudWatch alarms.</li>
                <li>Step Scaling: More granular changes based on thresholds.</li>
              </ul>
            </li>
            <li>Common example: scale out when CPU 	&gt; 80%, scale in when CPU &lt; 20%.</li>
          </ul>
        </div>

        {/* Step 6 */}
        <div className="p-4 border-b border-teal-100 mb-6 mt-8">
          <h2 className="text-2xl flex gap-1 sm:text-3xl font-semibold text-teal-700"><span>6.</span> Validate Setup</h2>
        </div>
        <div className="bg-teal-50 dark:bg-teal-100 p-4 rounded-lg">
          <ul className="list-disc pl-6 space-y-1">
            <li>Launch the Auto Scaling Group and ELB.</li>
            <li>Monitor:
              <ul className="pl-6 list-disc space-y-1">
                <li>Instances launched by ASG should auto-register with the ELB target group.</li>
                <li>Check health checks on ELB and ASG instance status.</li>
                <li>Ensure traffic is evenly distributed.</li>
              </ul>
            </li>
            <li>Test by visiting the ELB DNS name in a browser.</li>
          </ul>
        </div>

        {/* Additional Details */}
        <div className="p-4 border border-gray-300 dark:border-gray-700 rounded-lg mt-8 bg-gray-100 dark:bg-gray-800">
          <h3 className="font-semibold dark:text-gray-50 mb-3">Additional Important Details</h3>
          <ul className="list-disc pl-6 space-y-1 text-sm dark:text-gray-300">
            <li>Your ASG and ELB must be within the same VPC and subnets configured for those services.</li>
            <li>ELB security group must allow inbound traffic from clients; EC2 security groups must allow traffic from ELB.</li>
            <li>Instances launched by ASG auto-register with attached ELB target groups.</li>
            <li>Enable ELB health checks for better automatic unhealthy instance replacement.</li>
            <li>Enable access logs on ELB and monitor CloudWatch metrics/alarms for visibility.</li>
          </ul>
        </div>
      </div>

      {/* Command Reference */}
      <div className="mt-8">
        <h2 className="text-xl dark:text-gray-50 font-bold mb-4">Command Reference</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-700">
            <thead className="bg-gray-100 dark:bg-gray-700">
              <tr>
                <th className="border dark:border-gray-600 dark:bg-gray-50 p-2 text-left">Step</th>
                <th className="border dark:border-gray-600 p-2 dark:bg-gray-50 text-left">CLI Command / Console Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border dark:border-gray-600 p-2 dark:text-gray-50">Create Launch Template</td>
                <td className="border dark:border-gray-600 p-2 dark:text-gray-50 font-mono">
                  <code>aws ec2 create-launch-template --launch-template-name &lt;name&gt; --version-description &lt;version&gt; --launch-template-data file://template.json</code>
                </td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-50">
                <td className="border dark:border-gray-600 p-2">Create Auto Scaling Group</td>
                <td className="border dark:border-gray-600 p-2 font-mono">
                  <code>aws autoscaling create-auto-scaling-group --auto-scaling-group-name &lt;name&gt; --launch-template LaunchTemplateName=&lt;name&gt;,Version=&lt;version&gt; --min-size 1 --max-size 3 --vpc-zone-identifier &lt;subnet-id(s)&gt;</code>
                </td>
              </tr>
              <tr>
                <td className="border dark:border-gray-600 p-2 dark:text-gray-50">Attach Load Balancer Target Group</td>
                <td className="border dark:border-gray-600 dark:text-gray-50 p-2 font-mono">
                  <code>aws autoscaling attach-load-balancer-target-groups --auto-scaling-group-name &lt;name&gt; --target-group-arns &lt;target-group-arn(s)&gt;</code>
                </td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-50">
                <td className="border dark:border-gray-600 p-2">Configure Scaling Policy</td>
                <td className="border dark:border-gray-600 p-2 font-mono">
                  <code>aws autoscaling put-scaling-policy --auto-scaling-group-name &lt;name&gt; --policy-name &lt;policy&gt; --policy-type TargetTrackingScaling --target-tracking-configuration file://config.json</code>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Info banner */}
      <div className="mt-8 p-4 bg-green-100 rounded-lg">
        <p className="font-medium text-green-800">
          Properly configuring ELB with Auto Scaling Groups ensures high availability, scalability, and fault tolerance for your applications. Use monitoring and health checks for best reliability.
        </p>
      </div>
    </div>
  );
};

export default AutoScalingSection;
