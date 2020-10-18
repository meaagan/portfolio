import { Link } from "gatsby"
import React from "react"
import SideDrawer from "./sidedrawer"
import styles from "./nav.module.css"
import { makeStyles } from "@material-ui/core/styles"
import {
  AppBar,
  Toolbar,
  Container,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Hidden
} from "@material-ui/core";
import HideOnScroll from "./hideonscroll"

const useStyles = makeStyles({
  navbarDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
  },
  navDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
    backgroundColor: `white`,
  },
  toolbarStyles: {
    color: `black`,
    backgroundColor: `white`,
  },
  linkText: {
    backgroundImage: `none`,
  }
});

const navLinks = [
  { title: `about`, path: `#about` },
  { title: `projects`, path: `#projects` },
  { title: `contact`, path: `#contact` }
]

const Nav = () => {
  const classes = useStyles()
  return (
    <HideOnScroll>
      <AppBar className={classes.toolbarStyles} position="fixed">
        <Toolbar >
          <Container maxWidth="md" className={classes.navbarDisplayFlex}>
            <IconButton edge="start" color="inherit" aria-label="home">
              <Link to='#intro' key='intro'>Meagan Butters</Link>
            </IconButton>
            <Hidden smDown>
              <List component="nav" aria-labelledby="main navigation" className={classes.navDisplayFlex}>
                {navLinks.map(({ title, path }) => (
                    <Link to={path} key={title} className={classes.linkText}>
                      <ListItem button>
                        <ListItemText primary={title} />
                      </ListItem>
                    </Link>
                ))}
              </List>
            </Hidden>
            <Hidden mdUp>
              <SideDrawer navLinks={navLinks} />
            </Hidden>
          </Container>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  )
}
export default Nav