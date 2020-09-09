import React from 'react';
import { setTextFilter, setSortByNewest, setSortByOldest, setStartDate, setEndDate } from '../redux/actions/filters';
import { connect } from 'react-redux';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';

export class PostListFilters extends React.Component {
   
    state = {
        calendarFocused: null
    }
    onTextChange = (e) => {
        const text = e.target.value;
        this.props.setTextFilter(text);
    }

    onSortByChange = (e) => {
        const sortBy = e.target.value
        if(sortBy === 'newest'){
            this.props.setSortByNewest()
        } else if(sortBy === 'oldest'){
            this.props.setSortByOldest()
        } 
    }
    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate)
    };
    onFocusChange =(calendarFocused) => {
        this.setState(() => ({ calendarFocused }))
    }
    render() {
        return (
            <div>
                <input 
                    placeholder='Search'
                    value={this.props.filters.text}
                    onChange={this.onTextChange}
                />

                <select
                    value={this.props.filters.sortBy}
                    onChange={this.onSortByChange}
                >
                    <option value='newest'>Newest</option>
                    <option value='oldest'>Oldest</option>
                </select>
                <DateRangePicker 
                        startDate={this.props.filters.startDate}
                        startDateId={"1"}
                        endDate={this.props.filters.startDate}
                        endDateId={"2"}
                        onDatesChange={this.onDatesChange}
                        focusedInput={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        showClearDates={true}
                        isOutsideRange={() => false}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    setSortByNewest: () => dispatch(setSortByNewest()),
    setSortByOldest: () => dispatch(setSortByOldest()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostListFilters)