{
  description = "node";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/release-24.11";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = {
    self,
    flake-utils,
    nixpkgs,
    ...
  }:
    flake-utils.lib.eachDefaultSystem (
      system: let
        pkgs = import nixpkgs { inherit system; };
      in {
        devShell = pkgs.mkShell rec {
          name = "node";

          packages = [
            pkgs.nodejs_22
            pkgs.nodePackages.pnpm
          ];
        };
      }
    );
}