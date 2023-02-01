type TabPanelTypes = {
  children?: JSX.Element;
  image?: string;
  value?: number;
  index?: number;
};

export function TabPanel(props: TabPanelTypes) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <div style={{ padding: 3 }}>{children}</div>}
    </div>
  );
}
