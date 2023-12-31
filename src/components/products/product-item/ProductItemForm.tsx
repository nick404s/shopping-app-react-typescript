import React, {useRef, useState} from "react";
import classes from "./ProductItemForm.module.css";
import Input from "../../ui-elements/Input";

interface ProductItemFormProps {
  id: number;
  onAddToCart: (quantity: number) => void;
};

/** 
 * Represents the product item form component.
*/
function ProductItemForm(props: ProductItemFormProps) {

  const quantityInputRef = useRef<HTMLInputElement>(null);
  const [isFormValid, setIsFormValid] = useState<boolean>(true);

  const onSubmitHandler = (event: React.FormEvent): void => {
    event.preventDefault();

    const enteredQuantity = quantityInputRef.current!.value;
    const enteredQuantityNumber: number = enteredQuantity ? +enteredQuantity : 0;

    if (!enteredQuantity.trim() || enteredQuantityNumber < 1 || enteredQuantityNumber > 10) {
      setIsFormValid(false);
      return;
    }
    setIsFormValid(true);
    props.onAddToCart(enteredQuantityNumber);
  }

  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
      <Input
        ref={quantityInputRef}
        label="Quantity"
        input={{
          id: props.id,
          type: "number",
          min: "1",
          max: "10",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>Add</button>
      {!isFormValid && <p>Please enter a valid quantity!</p>}
    </form>
  );
}

export default ProductItemForm;