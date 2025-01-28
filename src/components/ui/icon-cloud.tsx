"use client";
import React from "react";
import {
  Cloud,
  renderSimpleIcon,
  fetchSimpleIcons,
  SimpleIcon,
  ICloud,
} from "react-icon-cloud";

type Icons = {
  simpleIcons: Record<string, SimpleIcon>;
  allIcon: Record<string, { title: string; hex: string; slug: string }>;
};

export const cloudProps: Omit<ICloud, "children"> = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: 40,
      color: "#ffff",
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
    dragControl: false,
  },
};

const useIcons = (slugs: string[]) => {
  const [icons, setIcons] = React.useState<Icons | undefined>(undefined);
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const iconsData = await fetchSimpleIcons({ slugs });
        setIcons(iconsData);
      } catch (error) {
        console.error("Error fetching icons:", error);
      }
    };
    fetchData();
  }, [slugs]);

  if (icons) {
    return Object.values(icons.simpleIcons).map((icon) =>
      renderSimpleIcon({
        icon,
        size: 52, // Icon size
        aProps: {
          href: undefined,
          target: undefined,
          rel: undefined,
          onClick: (e) => e.preventDefault(),
        },
      })
    );
  }

  return <a>Loading</a>;
};

const DynamicIconCloud = ({ slugs }: { slugs: string[] }) => {
  const icons = useIcons(slugs);
  return (
    <Cloud {...cloudProps}>
      {icons}
    </Cloud>
  );
};

export default DynamicIconCloud;
