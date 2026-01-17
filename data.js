const runData = [
    {
        category: "System Tools",
        id: "system",
        icon: "cpu",
        commands: [
            {
                name: "taskmgr",
                desc: "Task Manager. Monitor performance and kill processes.",
                syntax: "taskmgr",
                admin: false,
                dangerous: false,
                keywords: ["process", "cpu", "ram"]
            },
            {
                name: "regedit",
                desc: "Registry Editor. View and change system registry settings.",
                syntax: "regedit",
                admin: true,
                dangerous: true,
                keywords: ["keys", "values", "hkey"]
            },
            {
                name: "sysdm.cpl",
                desc: "System Properties. Rename PC, environment variables.",
                syntax: "sysdm.cpl",
                admin: true,
                dangerous: false,
                keywords: ["name", "domain", "path"]
            }
        ]
    },
    {
        category: "Control Panel",
        id: "cpl",
        icon: "settings",
        commands: [
            {
                name: "control",
                desc: "Opens the classic Control Panel.",
                syntax: "control",
                admin: false,
                dangerous: false,
                keywords: ["settings", "legacy"]
            },
            {
                name: "appwiz.cpl",
                desc: "Programs and Features. Uninstall software.",
                syntax: "appwiz.cpl",
                admin: true,
                dangerous: false,
                keywords: ["uninstall", "remove", "software"]
            },
            {
                name: "ncpa.cpl",
                desc: "Network Connections. Manage adapters and IP settings.",
                syntax: "ncpa.cpl",
                admin: true,
                dangerous: false,
                keywords: ["ethernet", "wifi", "ip", "dns"]
            }
        ]
    },
    {
        category: "Management Consoles",
        id: "msc",
        icon: "tool",
        commands: [
            {
                name: "services.msc",
                desc: "Services. Start, stop, and configure background services.",
                syntax: "services.msc",
                admin: true,
                dangerous: true,
                keywords: ["background", "daemon"]
            },
            {
                name: "diskmgmt.msc",
                desc: "Disk Management. Partition drives and format volumes.",
                syntax: "diskmgmt.msc",
                admin: true,
                dangerous: true,
                keywords: ["partition", "format", "drive", "volume"]
            },
            {
                name: "gpedit.msc",
                desc: "Local Group Policy Editor (Pro/Ent only).",
                syntax: "gpedit.msc",
                admin: true,
                dangerous: true,
                keywords: ["policy", "security", "restrictions"]
            },
            {
                name: "eventvwr",
                desc: "Event Viewer. View system logs and errors.",
                syntax: "eventvwr",
                admin: true,
                dangerous: false,
                keywords: ["logs", "error", "audit"]
            }
        ]
    },
    {
        category: "Maintenance",
        id: "maintenance",
        icon: "tool",
        commands: [
            {
                name: "cleanmgr",
                desc: "Disk Cleanup. Free up space and remove junk files.",
                syntax: "cleanmgr",
                admin: true,
                dangerous: false,
                keywords: ["disk", "cleanup", "space", "temp", "files", "junk"]
            },
            {
                name: "%temp%",
                desc: "Open the temporary files folder to manually clear junk files.",
                syntax: "%temp%",
                admin: false,
                dangerous: false,
                keywords: ["temp", "temporary", "files", "junk", "cache"]
            },
            {
                name: "prefetch",
                desc: "Open the Prefetch folder to clear application launch files.",
                syntax: "prefetch",
                admin: true,
                dangerous: false,
                keywords: ["performance", "startup", "cache", "prefetch"]
            },
            {
                name: "sfc /scannow",
                desc: "System File Checker. Scans and repairs protected system files.",
                syntax: "sfc /scannow",
                admin: true,
                dangerous: false,
                keywords: ["system", "file", "checker", "health", "scan", "integrity", "repair"]
            },
            {
                name: "DISM RestoreHealth",
                desc: "Repairs the Windows image and component store.",
                syntax: "DISM /Online /Cleanup-Image /RestoreHealth",
                admin: true,
                dangerous: true,
                keywords: ["dism", "health", "repair", "image", "component", "store", "cleanup"]
            },
            {
                name: "dfrgui",
                desc: "Defragment and Optimize Drives. Analyzes and optimizes your drives.",
                syntax: "dfrgui",
                admin: true,
                dangerous: false,
                keywords: ["defrag", "optimize", "drive", "ssd", "hdd"]
            },
            {
                name: "msconfig",
                desc: "System Configuration. Manage startup apps, boot options, and services.",
                syntax: "msconfig",
                admin: true,
                dangerous: false,
                keywords: ["boot", "startup", "safe mode", "apps"]
            },
            {
                name: "powercfg.cpl",
                desc: "Power Options. Optimize power plans for performance or energy saving.",
                syntax: "powercfg.cpl",
                admin: false,
                dangerous: false,
                keywords: ["battery", "sleep", "energy", "power", "performance"]
            },
            {
                name: "SystemPropertiesPerformance",
                desc: "Performance Options. Adjust visual effects for best performance.",
                syntax: "SystemPropertiesPerformance",
                admin: false,
                dangerous: false,
                keywords: ["visual", "effects", "performance", "animation", "graphics", "visuals"]
            },
            {
                name: "resmon",
                desc: "Resource Monitor. View real-time resource usage.",
                syntax: "resmon",
                admin: false,
                dangerous: false,
                keywords: ["performance", "cpu", "memory", "disk", "network"]
            }
        ]
    },
    {
        category: "Shell & Folders",
        id: "shell",
        icon: "folder",
        commands: [
            {
                name: ".",
                desc: "Opens the current user's home folder.",
                syntax: ".",
                admin: false,
                dangerous: false,
                keywords: ["home", "user"]
            },
            {
                name: "shell:startup",
                desc: "Opens the Startup folder for the current user.",
                syntax: "shell:startup",
                admin: false,
                dangerous: false,
                keywords: ["boot", "autostart"]
            },
            {
                name: "appdata",
                desc: "Opens the AppData Roaming folder.",
                syntax: "appdata",
                admin: false,
                dangerous: false,
                keywords: ["roaming", "config"]
            }
        ]
    }
];
