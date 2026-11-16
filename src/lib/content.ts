// Page copy; scripts/check-content.mjs fails when it drifts from Cephron-Website-Features.md.

export type Card = { title: string; body: string };

export type FeatureSection = {
  id: string;
  label: string;
  title: string;
  tagline: string;
  cards: Card[];
};

export const benefits: Card[] = [
  { title: "All in the browser", body: "Every task, from first install to VM console, happens in a clean web interface." },
  { title: "Fair sharing", body: "Give each team its own guaranteed slice of the hardware, with its own login." },
  { title: "No-downtime upkeep", body: "Service a server while its VMs keep running elsewhere." },
  { title: "Bring your VMs", body: "Move existing VMs in from VMware, Hyper-V, VirtualBox, Proxmox and the cloud." },
];

export const problems: Card[] = [
  { title: "Public-cloud bills that never stop", body: "Steady workloads on a public cloud mean paying every month for capacity your own servers could provide. Cephron turns hardware you own into a private cloud, without paying for a public cloud." },
  { title: "Tools only experts can run", body: "Running virtual machines often means the command line and waiting on the one person who knows it. Cephron does every task, from first install to VM console, in a clean web interface, without the command line." },
  { title: "VMs trapped on one platform", body: "Moving between platforms should not mean starting over. Cephron imports VMs from VMware, Hyper-V, VirtualBox, Proxmox and the cloud, and exports any VM's disk and settings, so your VMs are never locked in." },
];

export const featureSections: FeatureSection[] = [
  {
    id: "create",
    label: "Create",
    title: "Create a VM in minutes",
    tagline: "A guided wizard takes you from nothing to a running server, with no guesswork.",
    cards: [
      { title: "7-step creation wizard", body: "Name it, pick what it boots from, size it, add disks and networks, set up the login, review and go. Every step explains itself." },
      { title: "Start from anything", body: "Launch from a ready template, a cloud image, an ISO installer, or a blank disk that boots from the network." },
      { title: "Ready to log in on first boot", body: "Set the host name, user, password and SSH key up front. The VM configures itself the moment it starts." },
      { title: "Windows 11 ready", body: "UEFI, Secure Boot and a virtual TPM are one click away, so modern Windows installs without workarounds." },
      { title: "No surprises on size", body: "Cephron shows how much of your quota a new VM will use and stops you before you run out." },
      { title: "Templates for repeat work", body: "Built-in templates for Ubuntu, Debian, Fedora and Windows Server, plus your own custom recipes." },
    ],
  },
  {
    id: "run",
    label: "Control",
    title: "Run and control every VM",
    tagline: "Everything you need to operate a VM is on one page.",
    cards: [
      { title: "One-click power control", body: "Start, stop, pause and restart one VM or many at once. Force power off is there for a stuck machine." },
      { title: "Console in your browser", body: "See and use the VM's screen straight from the browser. No plugins, no extra software. Send Ctrl+Alt+Del and go full screen." },
      { title: "Live screen preview", body: "A small live picture of each VM's screen tells you at a glance whether it booted." },
      { title: "Snapshots and instant undo", body: "Save a VM's state before a risky change. If something breaks, restore it in one click." },
      { title: "Change hardware any time", body: "Add CPUs, memory, disks or network cards as your needs grow." },
      { title: "Performance at a glance", body: "CPU, memory, disk and network graphs for every VM, plus its IP address and guest status." },
    ],
  },
  {
    id: "share",
    label: "Teams",
    title: "Share one host between many teams",
    tagline: "Nodes split your hardware into private, guaranteed slices.",
    cards: [
      { title: "Guaranteed resources", body: "Each node gets its own CPU cores, memory and disk. One team can never slow another down or use its space." },
      { title: "Separate logins", body: "Every node has its own user. They see only their own VMs, disks and networks." },
      { title: "Flexible CPU sharing", body: "Give a node dedicated cores for steady speed, or let VMs share cores (up to 8x) to fit more on the same hardware." },
      { title: "Self-service for teams", body: "Node users create and manage their own VMs, disks, private networks and published ports, without waiting on IT." },
      { title: "Always fits", body: "Cephron checks every new node against the host's free capacity before creating anything." },
      { title: "Full visibility", body: "See each node's usage, VMs and sign-in history from one page." },
    ],
  },
  {
    id: "stay-up",
    label: "Uptime",
    title: "Built to stay up",
    tagline: "Grow from one server to a cluster, and keep VMs running through failures and maintenance.",
    cards: [
      { title: "Multi-server clusters", body: "Add servers with a simple join code. Cephron tells you when the cluster can survive a server failing." },
      { title: "Maintenance without downtime", body: "Put a server into maintenance and its VMs move to other servers, live where possible. Update, restart, bring it back." },
      { title: "Live migration", body: "Move a running VM to another server without switching it off." },
      { title: "Replicated storage", body: "VM disks are stored in several copies across servers, so a failed disk or server does not lose data." },
    ],
  },
  {
    id: "storage",
    label: "Storage",
    title: "Storage and networking made simple",
    tagline: "Powerful infrastructure, presented in plain words.",
    cards: [
      { title: "Thin disks", body: "Disks use real space only as data is written, so your storage goes further." },
      { title: "Image library", body: "Upload images and ISOs, or import them from a link. Every VM gets its own copy, so originals stay clean." },
      { title: "Clear storage view", body: "See total, used and free space, every disk in every server, and which VM uses which volume." },
      { title: "Internet out of the box", body: "Every VM gets a working network by default, with no setup." },
      { title: "VLANs and office networks", body: "Put VMs on your own network with their own addresses, and choose which teams may use each network." },
      { title: "Private networks and published ports", body: "Let VMs talk only to each other, or open a single port so customers can reach a website or service." },
    ],
  },
  {
    id: "move",
    label: "Migrate",
    title: "Move in from anywhere",
    tagline: "Keep the VMs you already have.",
    cards: [
      { title: "Import existing VMs", body: "Bring in VMs from VMware, Hyper-V, VirtualBox, Proxmox/KVM or a public cloud. OVA, qcow2, VMDK, VHD, VHDX, VDI and raw files are supported." },
      { title: "Export any time", body: "Download a VM's disk and settings for backup or to move it elsewhere. Your VMs are never locked in." },
    ],
  },
  {
    id: "observe",
    label: "Monitor",
    title: "Know what is happening",
    tagline: "Monitoring and troubleshooting are built in.",
    cards: [
      { title: "Health dashboard", body: "One home page shows capacity, hardware, alerts and recent activity, with quick-fix buttons for common issues." },
      { title: "Performance history", body: "CPU, memory and network graphs for the last hour, day, week or month." },
      { title: "Hardware health", body: "Temperatures and memory errors for every server, so you catch problems early." },
      { title: "Full audit trail", body: "Every action is recorded with who did it and when. Long jobs show their progress and result." },
      { title: "Logs in one place", body: "Read live logs from every server and service without logging in to each machine." },
      { title: "One-click support bundle", body: "Collect logs and settings into a single file to share with support." },
    ],
  },
  {
    id: "secure",
    label: "Security",
    title: "Secure by default",
    tagline: "Safe settings come first.",
    cards: [
      { title: "Protected sign-in", body: "New accounts must set their own password, and repeated wrong guesses lock the account." },
      { title: "Isolated teams", body: "Each node is walled off from the others, with its own permissions and network rules." },
      { title: "Security reminders", body: "Cephron warns you when risky options, such as remote shell access, are left on." },
      { title: "Guided first setup", body: "A setup wizard checks the hardware, prepares storage and adds servers before you go live." },
    ],
  },
];
