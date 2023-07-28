import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, selectFilteredData } from "../store/data/slice";

export default function Data() {
  const dispatch = useDispatch();

  const data = useSelector(selectFilteredData);

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <>
      {data.map((recipe) => (
        <div key={recipe.uuid}>
          <p>{recipe.title}</p>
        </div>
      ))}
    </>
  );
}
