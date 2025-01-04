"use client"

import React, { createContext, useContext } from "react";
import { comments, User } from "../_interfaces/allInterfaces";

interface AllDataContextType {
    AllComments: {totalComments: number; comments: comments[]};
    setAllComments: React.Dispatch<React.SetStateAction<{totalComments: number; comments: comments[]}>>;
    currentUser: User;
    setCurrentUser: React.Dispatch<React.SetStateAction<User>>;
};

export const AllDataContext = createContext<AllDataContextType | undefined>(undefined);

export const useAlldataContext = () => {
    const context = useContext(AllDataContext);
    if (!context) {
        throw new Error("UseAllDataContext must be used within its Provider");
    };
    return context;
};