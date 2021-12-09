import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { connect } from 'react-redux';

function Headermenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (e) => {
    props.changeCategory(e.target.textContent);
    props.products(e.target.textContent);
    setAnchorEl(null);
};
  return (
    <div>
      <Button
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        color="inherit"
      >
        Categories
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {props.category.map((item) => (
          <MenuItem name={item} onClick={() => props.changeCategory(item)}>{item}</MenuItem>
        ))}
      </Menu>
    </div>
  );
}







const mapStateToProps = (state) => ({category: state.category.category});

const mapDispatchToProps = (dispatch) => ({
  changeCategory: (name) =>
      dispatch({ type: 'SELECTED_CATAGORY', payload: name }),
  // changeProduct: (name) => dispatch({ type: 'SELECTED_CATAGORY', payload: name }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Headermenu);
