import {styled} from "storybook/theming";
import {type ReactNode, useState} from "react";

type TypeModal = {
    children?: ReactNode,
    closeButton?: boolean,
    onClose?: () => void
}


const SOverlayModal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    background: #4F4F4F;
    backdrop-filter: blur(7px);
    opacity: 0.6;

    width: 100%;
    height: 100vh;
    
    cursor: pointer;
`

const SContainer = styled.div`
    max-width: 1184px;
    margin: 0 auto;
    width: 100%;
    padding: 0 5px;
`


const SModal = styled.div`

    position: relative;
    z-index: 1000;
    
    width: 300px;
    height: 300px;

    background: #fff;
    border-radius: 10px;
    padding: 20px;
`

const SCloseButtonWrapper = styled.div`
    background: #fff;

    margin-bottom: 20px;
    display: flex;
    justify-content: end;
    align-items: center;
`

const SCloseButtonOverlay = styled.div`
    padding: 5px;
    border-radius: 4px;
    transition: 0.2s ease-in-out;
    cursor: pointer;

    :hover {
        background: #1E71E8;
    }
`

const SCloseButton = styled.div`
    background: url('./image/close-button.svg');
    width: 13px;
    height: 13px;
`


export const Modal = ({children, closeButton, onClose}: TypeModal) => {

    return (
        <>
            <SOverlayModal onClick={onClose} />
                <SContainer>
                    <SModal>
                        {closeButton && (
                            <SCloseButtonWrapper>
                                <SCloseButtonOverlay onClick={onClose}>
                                    <SCloseButton/>
                                </SCloseButtonOverlay>
                            </SCloseButtonWrapper>
                        )}

                        {children}
                    </SModal>
                </SContainer>
        </>
    )
}