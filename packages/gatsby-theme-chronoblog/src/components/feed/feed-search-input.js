/** @jsx jsx */
import { jsx } from 'theme-ui';

export default ({ value, onChange }) => {
  return (
    <input
      // sx={{
      //   bg: 'muted',
      //   px: 2,
      //   py: 2,
      //   width: ['100%', '50%']
      // }}
      placeholder="search"
      value={value}
      onChange={onChange}
    />
  );
};
