import ItemDetails from "../components/views/ItemDetails";
import Inventory from '../components/views/Inventory'
import Test from "../components/views/Test";
export const routes = [
         {
           path: "",
           component: Inventory
         },
         {
           path: "/test",
           component: Test
         },
         {
           path: "/item/:id",
           component: ItemDetails
        
         }
       ];
