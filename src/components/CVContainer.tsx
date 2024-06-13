interface CVContainerprops {
  children: JSX.Element;
  renderCV: boolean;
}
export function CVContainer({ children, renderCV }: CVContainerprops) {
  if (renderCV) {
    return <div>{children}</div>;
  } else return;
}
