import PropTypes from 'prop-types';
import { Title } from './SectionStyled';

const Section = ({ title, children }) => {
    return (
        <>
            <Title>{title}</Title>
            {children}
        </>
    );
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Section;