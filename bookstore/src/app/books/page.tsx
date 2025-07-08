"use client"

import React, { useState } from 'react'
import {formatDistanceToNow} from 'date-fns';

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
                setSelectedCondition(updateFilter());
                break;
            case "classType":
                setSelectedType(updateFilter());
                break;
            case "category":
                setSelectedCateogary(updateFilter());
                break;
        }
        setCurrentPage(1);
    }

    const filterBooks = books.filter((book)=>{
        const conditionMatch = selectedCondition.length === 0 || 
        selectedCondition.map((cond)=> cond.toLowerCase()).includes(book.condition.toLowerCase());
        const typeMatch = selectedType.length === 0 || selectedType.map((cond) => cond.toLowerCase()).includes(book.classType.toLowerCase());

        const categoryMatch = selectedCateogary.length === 0 ||
        selectedCateogary.map((cond)=> cond.toLowerCase()).includes(book.category.toLowerCase());

        return conditionMatch && typeMatch && categoryMatch;
    })
    const sortBooks = [...filterBooks].sort((a,b)=>{
        switch(sortOptions){
            case "newest":
                return (
                    new Date(b.createdAt).getTime() - new Date(a.createdAt()).getTime()
                )
            case "oldest":
                return (new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime())
            case "price-low":
                return a.finalPrice - b.finalPrice
            case "price-high":
                return b.finalPrice - a.finalPrice
            default :
                return 0
        }
    })

    const totalPages = Math.ceil(sortedBooks.length / booksPerPage);
    const paginatedBooks = sortedBooks.slice((currentPage-1)*booksPerPage, currentPage*booksPerPage);

    const handlePageChanges = (page: number) =>{
        setCurrentPage(page);
    }

    const formateDate = (date: Date) =>{
        var newDate = new Date(date);
        return formatDistanceToNow(newDate, {addSuffix: true});
    }

  return (
    <div>page</div>
  )
}

export default page