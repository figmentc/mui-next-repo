import { Button, Typography } from '@material-ui/core'

// import // FlashOnRounded
// WhatshotRounded,
// SearchRounded
// '@material-ui/icons'
// import LinkComponent from './Link.component'
import LinkComponent from './Link.component'
// import { baseRoutes } from '../utils/Routes'

// NavItem: A single navgigation button on the sidebar
// const navItemUseStyles = makeStyles({
//   root: {
//     padding: '5px 20px 5px 10px',
//     textAlign: 'left',
//     borderRadius: 30
//   },
//   navItemIcon: {
//     fontSize: 35
//   },
//   navItemText: {
//     marginLeft: 15,
//     fontWeight: 700,
//     fontSize: 20
//   }
// })
// type NavItemProp = { icon: typeof FlashOnRounded; name: string; href: string }

// const NavItemComponent: React.FC<NavItemProp> = (props) => {
//   // const classes = navItemUseStyles()
//   return (
//     <Button
//       // className={classes.root}
//       component={LinkComponent}
//       href={props.href}
//     >
//       hello world
//       {/* <props.icon className={classes.navItemIcon} fontSize='inherit' />
//       <Typography className={classes.navItemText}>{props.name}</Typography> */}
//     </Button>
//   )
// }

// SideNavComponent: The sidebar navigation that appears on every view
// const NavItems: NavItemProp[] = [
//   { name: 'Drop Feed', href: baseRoutes.DROP_FEED, icon: FlashOnRounded },
//   { name: 'Top Rated', href: baseRoutes.TOP_RATED, icon: WhatshotRounded },
//   { name: 'Search', href: baseRoutes.SEARCH, icon: SearchRounded }
// ]

const SideNavComponent: React.FC = () => {
  // const classes = useStyles()
  return (<Button href="/about" component={LinkComponent}> <Typography>Link Component</Typography></Button>)

}

export default SideNavComponent
