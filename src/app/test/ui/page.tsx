import {Button} from '@/common/components/ui/Button';

export default function Ui() {

    let fillButton = <Button text='Fill'/>;
    let outlineButton = <Button text='Outline' fill={false} />;
    let plainButton = <Button text='Plain' fill={false} trim={false}/>
    let navButton = <Button text='Nav' href='/posts/4'/>

    return (
        <div className='w-min'>
            {fillButton}
            {outlineButton}
            {plainButton}
            {navButton}
        </div>
    );
}