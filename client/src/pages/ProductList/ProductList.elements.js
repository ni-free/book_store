import styled from 'styled-components';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


export const Delete = styled(DeleteIcon)`
    color: red;
    & :hover{
        cursor: pointer;
    }
`

export const Edit = styled(EditIcon)`
    color: teal;
    & :hover{
        cursor: pointer;
    }
`
export const ButtonContainer = styled.div`
    margin-top: -30px;
    margin-bottom: 15px;
    float: right;
`
export const PaginationContainer = styled.div`
    
    margin:  40px auto;
    & ul {
        justify-content: center;
    }
    
`