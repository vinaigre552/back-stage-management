// element-ui的引入
import { Button,Container,Aside,Header,Menu,MenuItem,MenuItemGroup,Submenu,Main,Dropdown,DropdownItem,DropdownMenu,Row,Card,Col,Table,TableColumn} from "element-ui";
const element={
    install:function(Vue){
        Vue.use(Button)
        Vue.use(Container)
        Vue.use(Aside)
        Vue.use(Header)
        Vue.use(Menu)
        Vue.use(MenuItem)
        Vue.use(MenuItemGroup)
        Vue.use(Submenu)
        Vue.use(Main)
        Vue.use(Dropdown)
        Vue.use(DropdownMenu)
        Vue.use(DropdownItem)
        Vue.use(Row)
        Vue.use(Card)
        Vue.use(Col)
        Vue.use(Table)
        Vue.use(TableColumn)

    }
}
export default element