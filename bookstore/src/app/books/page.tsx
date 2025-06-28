import React, { useState } from 'react'

const page = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCondition, setSelectedCondition]  = useState<string[]>([]);
    const [selectedType, setSelectedType] = useState<string[]>([]);
    const [selectedCateogary, setSelectedCateogary] = useState<string[]>([]);
    const [sortOptions,setSortOption] = useState("newest");
    const [isLoading, setIsLoading] = useState(false);
    const booksPerPage = 6

    const toggleFilter = (section: string , item: string) =>{
        const updateFilter = (prev: string[]) =>{
            prev.includes(item) ? prev.filter((i) => i !== item) : [...prev,item];
        }

        switch(section){
            case "condition":
                setSelectedCondition(updateFilter);
                break;
            case "condition":
                setSelectedType(updateFilter);
                break;
            case "condition":
                setSelectedCateogary(updateFilter);
                break;
        }
    }

    const filterBooks = books.filter
    const sortBooks = [...filterBooks].sort((a,b)=>{
        switch(){
            case "newest":
                return (
                    new Date(b.createdAt)
                )
        }
    })

  return (
    <div>page</div>
  )
}

export default page