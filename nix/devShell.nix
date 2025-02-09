{
  mkShell,
  nodejs_22,
  nodePackages
}:
mkShell rec {
  name = "node";

  packages = [
    nodejs_22
    nodePackages.pnpm
  ];
}