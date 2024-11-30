import { useEffect, useState } from "react";
import { ICategory } from "../../@libs/axios/types/types";
import { CategoryService } from "../../sevices/category-service";
import HighlightSection from "../../components/HighlightSection";
import Section from "../../components/Section";

function HomePage(){

    const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(()=>{
    CategoryService.getAll()
      .then(result => {
        setCategories(result.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, []);
    return(
        <main
        style={{
          marginTop: '8rem'
        }}
      >
        <HighlightSection />
        {
          categories.map(item => (
            <Section key={item.Id} category={item} />
          ))
        }
      </main>
    )
}
export default HomePage;