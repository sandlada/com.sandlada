/**
 * Single source of truth for the two newest packages, shared by the product grid
 * and the structured data, so a registry URL is only written once.
 */
export const ReleaseEntries = {
    Okyct: {
        FormalName: "@sandlada/okyct",
        DisplayName: "OKYCT",
        GitHubLink: "https://github.com/sandlada/okyct",
        NpmLink: "https://www.npmjs.com/package/@sandlada/okyct",
        LicenseLink: "https://github.com/sandlada/okyct/blob/main/LICENSE",
        WebsiteLink: "https://okyct.sandlada.com",
    },
    RopSharp: {
        FormalName: "Sandlada.RopSharp",
        DisplayName: "RopSharp",
        GitHubLink: "https://github.com/sandlada/RopSharp",
        NuGetLink: "https://www.nuget.org/packages/Sandlada.RopSharp",
        LicenseLink: "https://github.com/sandlada/RopSharp/blob/main/LICENSE",
    },
} as const
