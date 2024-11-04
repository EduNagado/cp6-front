"use client"
import { TipoProduto } from "../../types"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { FaTrashAlt } from "react-icons/fa"
import Modal from "./Modal"

export default function Produtos() {

    const router = useRouter()
    const [open, setOpen] = useState(false)
    const [idDelete, setIdDelete] = useState<number | null>(null) // Defina como número ou nulo inicialmente
    const [lista, setLista] = useState<TipoProduto[]>([])

    const idModal = (id: number) => {
        setOpen(true)
        setIdDelete(id)
    }

    useEffect(() => {
        const chamadaApi = async () => {
            try {
                const response = await fetch("http://localhost:3000/api/base-produtos")
                if (!response.ok) throw new Error("Falha ao buscar dados")
                const data = await response.json()
                setLista(data)
                console.log(data)
            } catch (error) {
                console.error("Erro ao carregar produtos:", error)
            }
        }
        chamadaApi()
    }, [])

    const handleDelete = async (id: number) => {
        try {
            const response = await fetch(`http://localhost:3000/api/base-produtos/${id}`, { method: "DELETE" })
            if (response.ok) {
                setLista(prevLista => prevLista.filter(produto => produto.id !== id)) // Atualiza a lista sem recarregar
                setOpen(false)
            } else {
                alert("Erro ao deletar o produto")
                setOpen(false)
                router.push('/produtos')
            }
        } catch (error) {
            console.error("Falha ao apagar registro.", error)
        }
    }

    return (
        <main className="grow p-5">
            <h1 className="text-center text-4xl font-bold text-indigo-600 mb-4">Produtos</h1>
            <table className="w-2/3 m-auto">
                <thead className="bg-slate-900 text-white">
                    <tr>
                        <th>Id</th><th>Nome</th><th>Preço</th><th>estoque</th><th>Editar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        lista.map(p => (
                            <tr key={p.id}>
                                <td>{p.id}</td>
                                <td>{p.nome}</td>
                                <td>{p.preco}</td>
                                <td>{p.estoque}</td>
                                <td>
                                    <Link className="font-bold text-red-600" href={`/produtos/produto/${p.id}`}>Editar</Link>
                                    {" | "}
                                    <button title="deletar" className="text-red-500" onClick={() => idModal(p.id)}>
                                        <FaTrashAlt />
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
                <tfoot className="bg-black text-white">
                    <tr>
                        <td colSpan={5}>Total de Produtos: {lista.length}</td>
                    </tr>
                </tfoot>
            </table>
            {open && (
                <Modal open={open} onClose={() => setOpen(false)}>
                    <div className="text-center w-56">
                        <FaTrashAlt size={56} className="mx-auto text-red-500" />
                        <h3 className="text-lg font-black text-gray-800">Excluir Produto?</h3>
                        <p className="text-gray-500 text-sm">Você tem certeza que deseja excluir o produto?</p>
                    </div>
                    <div className="flex gap-4">
                        <button className="btn btn-danger w-full" onClick={() => idDelete !== null && handleDelete(idDelete)}>Excluir</button>
                        <button className="btn btn-light w-full" onClick={() => setOpen(false)}>Cancelar</button>
                    </div>
                </Modal>
            )}
        </main>
    )
}