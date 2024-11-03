"use client"
import { TipoProduto } from "@/types";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CadastroProdutos() {

    const navigate = useRouter()

    const [produto, setProduto] = useState<TipoProduto>({
        id: 0,
        nome: '',
        preco: 0,
        estoque: 0
    })
    //capta dos dados digitados e insere no objeto produto
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setProduto({ ...produto, [name]: value })
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const cabecalho = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(produto)
        }

        try {
            const response = await fetch("http://localhost:3000/api/base-produtos", cabecalho)

            if (response.ok) {
                alert(`${produto.nome} cadastrado com sucesso`)
                setProduto({
                    id: 0,
                    nome: "",
                    preco: 0,
                    estoque: 0
                })
                navigate.push("/produtos")
            } else {
                alert("Erro ao cadastrar")
            }
        } catch (error) {
            console.error("Erro ao cadastrar o produto:", error)
        }

    }

    return (
        <main className="grow p-5">
            <h1 className="text-3xl text-center font-bold mb-2 text-indigo-600">Cadastro de Produtos</h1>
            <p className="text-xl text-center font-bold mb-4">Aqui inserimos um novo produto assim que chega na loja.</p>
            <form className="w-1/3 m-auto border border-indigo-900 p-4 rounded-md" onSubmit={handleSubmit}>
                <div className="flex flex-col mb-4">
                    <label className="text-gray-700" htmlFor="idnome">Nome</label>
                    <input 
                        className="border border-gray-700 p-2 rounded-md" 
                        type="text" 
                        name="nome" 
                        id="idnome"
                        onChange={handleChange} 
                        value={produto.nome} 
                    />
                </div>
                <div className="flex flex-col mb-4">
                    <label className="text-gray-700" htmlFor="idpreco">Preço</label>
                    <input 
                        className="border border-gray-700 p-2 rounded-md" 
                        type="number" 
                        step="0.01" 
                        name="preco" 
                        id="idpreco"
                        onChange={handleChange} 
                        value={produto.preco} 
                    />
                </div>
                <div className="flex flex-col mb-4">
                    <label className="text-gray-700" htmlFor="idestoque">Estoque</label>
                    <input 
                        className="border border-gray-700 p-2 rounded-md" 
                        type="number" 
                        name="estoque" 
                        id="idestoque"
                        onChange={handleChange} 
                        value={produto.estoque} 
                    />
                </div>
                <button 
                    className="bg-green-700 text-white text-xl p-3 rounded-md w-full" 
                    type="submit"
                >
                    Cadastrar Produto de anime 
                </button>
            </form>
        </main>
    )

}