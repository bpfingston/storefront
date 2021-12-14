import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { connect } from 'react-redux';
import { fetchCategories } from '../../store/category';


function Headermenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  useEffect(() => {
    props.getCategories();
  }, [])
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
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {props.categorySelect.map((item, key) => (
          <MenuItem
            key={key}
            name={item.displayName}
            onClick={() => {
              props.changeCategory(item.displayName);
              setAnchorEl(null);
              props.hideCartHandler();
            }}
          >
            {item.displayName}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

const mapStateToProps = (state) => ({
  categorySelect: state.category.category,
});

const mapDispatchToProps = (dispatch) => ({
  getCategories: () => dispatch(fetchCategories()),
  changeCategory: (name) =>
    dispatch({ type: 'SELECTED_CATEGORY', payload: name }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Headermenu);
