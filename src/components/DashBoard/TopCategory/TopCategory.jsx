import TopProducts from "./TopProducts";
import { customers, reviews, topProducts } from "../../../utils/utils";
import Reviews from "./Reviews";
import Customers from "./Customers";

const TopCategory = () => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-5">
			<TopProducts heading="Top Owner" products={topProducts} />
			<Reviews heading="Customer " reviews={reviews} />
			<Customers heading="Cars" customers={customers} />
		</div>
	);
};

export default TopCategory;
