import styled from 'styled-components'
import Hearder from '../../components/Hearder'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export default function HomePage () {
  const navegate = useNavigate()

  return (
    <>
      <Hearder />
      <MainStyle>
        <Button
          variant="contained"
          onClick={() => {
            navegate('/NewGame')
          }}
        >
          Marque um novo jogo
        </Button>
      </MainStyle>
    </>
  )
}

const MainStyle = styled.main`
  width: 100%;

  display: flex;
  flex-direction: column;
`
