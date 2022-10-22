import React, { useState, useEffect } from 'react'

import PageTitle from '../../components/Typography/PageTitle'
import CTA from '../../components/CTA'
import { Table, TableHeader, TableCell, TableBody, TableRow, TableFooter, TableContainer, Badge, Modal, ModalHeader, ModalBody, ModalFooter, Button } from '@windmill/react-ui'
import { EditIcon, TrashIcon } from '../../icons'
import TableCells from '../../components/Table/TableCell'
import Paginations from '../../components/Table/Paginations'
import { useDispatch, useSelector } from 'react-redux'
import { useAuth } from '../../middleware/AuthProvider'

import { fetchAgents } from '../../redux/feature/agentSlice'
import { Link } from 'react-router-dom'

function ViewAgents() {
    const {token} = useAuth();

    // setup pages control for every table
    const [pageTable, setPageTable] = useState(1);

    const {agents} = useSelector((state) => state.agent);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAgents(token));
    }, []);

    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <>
        <PageTitle>View Agents</PageTitle>
        <CTA title="Add New Agent" url='/app/create-agent' />
        <TableContainer className="mb-8">
            <Table>
            <TableHeader>
                <tr>
                    <TableCell>S/N</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Balance</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Date Created</TableCell>
                    <TableCell>Actions</TableCell>
                </tr>
            </TableHeader>
            <TableBody>
                {agents.map((data, i) => (
                    <TableRow key={i}>
                        <TableCells title={1} />
                        <TableCells title={data.name} />
                        <TableCells title={data.email} />
                        <TableCells title={'$' + data.balance} />
                        <TableCell>
                            <Badge type={data.status ? 'success' : 'danger'}>{data.status ? 'available' : 'not available'}</Badge>
                        </TableCell>
                        <TableCells title={new Date(data.createdAt).toLocaleDateString()} />
                        <TableCell>
                            <div className="flex items-center space-x-4">
                                <Button layout="link" tag={Link} to={'/app/edit-product/'+data._id} size="icon" aria-label="Edit">
                                    <EditIcon className="w-5 h-5" aria-hidden="true" />
                                </Button>
                                <Button layout="link" size="icon" aria-label="Delete"  onClick={() => setIsModalOpen(true)}>
                                    <TrashIcon className="w-5 h-5" aria-hidden="true" />
                                </Button>
                            </div>
                        </TableCell>
                        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                            <ModalHeader>Delete Agent</ModalHeader>
                            <ModalBody>Are you really sure you want to delete this agent?</ModalBody>
                            <form>
                                <ModalFooter>                               
                                    <div className="hidden sm:block">
                                        <Button layout="outline" onClick={() => setIsModalOpen(false)}>Cancel</Button>
                                    </div>
                                    <div className="hidden sm:block">
                                        <Button type='submit'>Proceed</Button>
                                    </div>
                                    <div className="block w-full sm:hidden">
                                        <Button block size="large" layout="outline" onClick={() => setIsModalOpen(false)}>Cancel</Button>
                                    </div>
                                    <div className="block w-full sm:hidden">
                                        <Button type='submit' block size="large">Proceed</Button>
                                    </div>
                                </ModalFooter>
                            </form>
                        </Modal>
                    </TableRow>
                ))}
            </TableBody>
            </Table>
            <TableFooter>
                <Paginations total={agents.length}  onChange={(p) => setPageTable(p)} />
            </TableFooter>
        </TableContainer>
        </>
    )
}

export default ViewAgents
