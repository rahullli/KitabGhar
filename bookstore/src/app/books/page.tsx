"use client"

import React, { useState } from 'react'
import {formatDistanceToNow} from 'date-fns';
import Link from 'next/link';
import { Accordion } from '@/components/ui/accordion';

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
    <div className = "min-h-screen bg-gray-100">
        <div className="container mx-auto px-4 py-8">
            <nav className='mb-8 flex items-center gap-2 text-sm text-muted-foreground'>
                <Link href='/' className='text-primary hover:underline'>
                    {" "}
                    Home {" "}
                </Link>
                <span>/</span>
                <span>Books</span>
            </nav>
            <h1 className="mb-8 text-3xl font-bold">
                {" "}
                Find from your 1000s of used books online{" "}
            </h1>
            <div className="grid gap-8 md:grid-cols-[280px_1fr]">
                <div className="space-y-6">
                    <Accordion type='multiple' className='bg-white p-6 border rounded-lg'></Accordion>
                </div>
            </div>
        </div>
    </div>
  )
}

export default page