import React from 'react';
import Base from './base';
import Button from './button';
import {addUserConfirmation} from './notifier';
import RestartSvg from '../art/restartSvg';

type Props = {
    onRestart: () => void;
}

export default class RestartButton extends Base<Props, {}> {
    render() {
        return (
            <Button title='Restart' className='button_headerAction' onClick={() => this.startRestart()}>
                <RestartSvg />
                <span className='button_label'>Restart</span>
            </Button>
        );
    }

    startRestart() {
        const {onRestart} = this.props;
        const message = 'Are you sure you want to restart this item?';

        addUserConfirmation(message, async (result) => {
            if (!result) return;

            await onRestart();
            window.history.back();
        });
    }
}
