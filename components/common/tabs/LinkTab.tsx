import TabChip from "./TabChip";

type LinkTabProps = {
  links: {
    name: string;
    href: string;
  }[];

  ItemFromBeggining?: React.ReactNode;
  ItemFromEnd?: React.ReactNode;

  underlines?: boolean;
  className?: string;
};

export default function LinkTab(props: LinkTabProps) {
  return (
    <div className={`flex ${props.className}`}>
      {props.ItemFromBeggining}
      {props.links.map((link) => (
        <TabChip key={link.href} link={link} underlines={props.underlines} />
      ))}
      {props.ItemFromEnd}
    </div>
  );
}
