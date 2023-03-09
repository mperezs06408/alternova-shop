import Button from '@atoms/Button';
import Input from '@atoms/Input';
import Select from '@atoms/Select';
import ErrorWidget from '@atoms/ErrorWidget';
import Filters from '@molecules/Filters';
import ProductList from '@organisms/ProductList';
import ProductCard from '@organisms/ProductCard';
import ProductStoreLayout from '@template/ProductStoreLayout';
import useProductStore from './useProductStore';
import "./ProductStore.scss";

function ProductStore() {
    const {
        state,
        methods
    } = useProductStore();

    const {
        categories,
        productsFiltered
    } = state

    const {
        onSearchItemByName,
        searchByName,
        onSearchItemByCategory,
        searchByCategory,
        getQuantitySelected,
        handleClick
    } = methods

    return(
        <ProductStoreLayout>
            <Filters>
                <Input 
                    name="searchByName"
                    placeholder="Search by name"
                    handleChange={onSearchItemByName}
                    value={searchByName}
                />
                <Select 
                    defaultLabel="Select a category"
                    name="searchByCategory"
                    handleChange={onSearchItemByCategory}
                    value={searchByCategory}
                    options={categories}
                />                
            </Filters>
            <ProductList>
                {
                    productsFiltered.map( it => (
                        <ProductCard
                            key={it.name}
                            name={it.name}
                            stock={it.stock}
                            price={it.unit_price}
                            quantitySelected={() => getQuantitySelected(it.name) }
                            buttons={
                                () => (
                                    <Button
                                        label={it.stock === 0? "Out of stock":"Add to cart"}  
                                        handleClick={() => handleClick(it.name, it.stock, it.unit_price)}
                                        disabled={it.stock === 0}  
                                    />
                                )
                            }
                        />
                    ))
                }
            </ProductList>
            {
                productsFiltered.length === 0
                &&
                <ErrorWidget />
            }
        </ProductStoreLayout>
    )
}

export default ProductStore;