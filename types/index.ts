export type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant: string;
  full?: boolean;
};

export interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

export interface FeatureItemProps {
  title: string;
  icon: string;
  description: string;
}

export interface FooterColumnProps {
  title: string;
  children: React.ReactNode;
}
