import React, { useEffect } from 'react';
import { createContext, useState } from 'react';
import { GridItemsType } from '../interfaces/GridItemsType';
import icon1 from '../assets/king.png';
import icon2 from '../assets/queen.png';
import icon3 from '../assets/rook.png';
import icon4 from '../assets/pawn.png';
import icon5 from '../assets/horse.png';
import icon6 from '../assets/bishop.png';

interface ContextPiecesProps {
  items: GridItemsType[],
  selectedCard: GridItemsType[],
  setSelectedCard: React.Dispatch<React.SetStateAction<GridItemsType[]>>,
  addSelectedCard: (item: GridItemsType) => void,
  handleDelete: (id: number) => void,
  handleClearAll: () => void,
  total : number
}

export const ContextPieces = createContext({} as ContextPiecesProps);

interface ContextPiecesProviderProps {
  children: JSX.Element;
}
export const ContextPiecesProvider = ({
  children,
}: ContextPiecesProviderProps) => {
  const [items] = useState<GridItemsType[]>([
    {
      id: 1,
      name: 'King',
      description: 'The most important piece in the game',
      value: 1000,
      image: icon1,
    },
    {
      id: 2,
      name: 'Queen',
      description: 'A versatile and powerful piece',
      value: 500,
      image: icon2,
    },
    {
      id: 3,
      name: 'Rook',
      description: 'A piece that moves in a straight line',
      value: 300,
      image: icon3,
    },
    {
      id: 4,
      name: 'Pawn',
      description: 'The basic piece of the game',
      value: 100,
      image: icon4,
    },
    {
      id: 5,
      name: 'Knight',
      description: 'A piece that moves in an "L" shape',
      value: 150,
      image: icon5,
    },
    {
      id: 6,
      name: 'Bishop',
      description: 'A piece that moves diagonally',
      value: 200,
      image: icon6,
    },
  ]);

  const [selectedCard, setSelectedCard] = useState<GridItemsType[]>([])
  const [total, setTotal] = useState<number>(0)

  useEffect(() => {
    handleTotal()
  })

  const addSelectedCard = (item: GridItemsType) => {
    const id = selectedCard.length ? selectedCard[selectedCard.length - 1].id + 1 : 1
    const newList = {
      id,
      name: item.name,
      description: item.description,
      value: item.value,
      image: item.image
    }
    setSelectedCard([...selectedCard, newList])
  }

  const handleDelete = (id: number) => {
    const selectedItem = selectedCard.filter((item) => item.id !== id)
    setSelectedCard(selectedItem)
  }

  const handleClearAll = () => {
    setSelectedCard([])
  }

  const handleTotal = () => {
    if (selectedCard.length > 0) {
      const totalItem = selectedCard.reduce((acc, curr) => acc + curr.value, 0)
      setTotal(totalItem)
    } else {
      setTotal(0)
    }
  }

  return (
    <ContextPieces.Provider value={{
      items,
      selectedCard,
      setSelectedCard,
      addSelectedCard,
      handleDelete,
      handleClearAll,
      total
    }}>
      {children}
    </ContextPieces.Provider>
  );
};