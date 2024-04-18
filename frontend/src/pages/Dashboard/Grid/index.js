import axios from "axios";
import { Table, Thead, Tbody, Tr, Th, Td, Icon } from "@chakra-ui/react";
import { FaTrash, FaEdit } from "react-icons/fa";
import PropTypes from "prop-types";
import { toast } from "react-toastify";

const Grid = ({ users, setUsers, setOnEdit }) => {
  const handleEdit = (item) => {
    setOnEdit(item);
  };

  const handleDelete = async (idCadastro) => {
    try {
      await axios.delete("http://localhost:8080/" + idCadastro);
      const newArray = users.filter((user) => user.idCadastro !== idCadastro);
      setUsers(newArray);
      toast({
        title: "Usuário excluído com sucesso!",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: "Erro ao deletar usuário!",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Table variant="simple" size="md">
      <Thead>
        <Tr>
          <Th>Nome</Th>
          <Th>Email</Th>
          <Th>Telefone</Th>
          <Th>CPF</Th>
          <Th>Endereço</Th>
          <Th>Senha</Th>
          <Th></Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        {users.map((item, i) => (
          <Tr key={i}>
            <Td>{item.nome}</Td>
            <Td>{item.email}</Td>
            <Td>{item.telefone}</Td>
            <Td>{item.cpf}</Td>
            <Td>{item.endereco}</Td>
            <Td>{item.senha}</Td>
            <Td>
              <Icon as={FaEdit} onClick={() => handleEdit(item)} />
            </Td>
            <Td>
              <Icon
                as={FaTrash}
                onClick={() => handleDelete(item.idCadastro)}
              />
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

// Definindo PropTypes para validar as props
Grid.propTypes = {
  users: PropTypes.array.isRequired,
  setUsers: PropTypes.func.isRequired,
  setOnEdit: PropTypes.func.isRequired,
};

export default Grid;
