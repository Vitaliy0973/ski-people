import Navigo from "navigo";
import { header } from "../components/header";
import { footer } from "../components/footer";
import { catalog } from "../components/catalog";
import { layoutMain } from "../components/layout";
import { breadcrumb } from "../components/breadcrumb";
import { goods } from "../components/goods";
import { product } from "../components/product";
import { cart } from "../components/cart";
import { order } from "../components/order";

const router = new Navigo('/', { linksSelector: 'a[href^="/"]' });

export const initRouter = () => {
    router
        .on('/', () => {
            document.body.append(
                header(),
                layoutMain([
                    catalog(),
                    breadcrumb(),
                    goods(),
                    product(),
                    cart(),
                    order(),
                ]),
                footer()
            );
            console.log('HOME');
        })
        .on('/favorite', () => {
            console.log('FAVORITE');
        })
        .notFound(() => {
            console.log('ERROR 404');
        });
    
    router.resolve();
}