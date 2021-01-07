import React, { Fragment, useRef, useState } from 'react';

import Delete from '../../icons/delete';
import Edit from '../../icons/edit';
import Close from '../../icons/close';

const Event = ({
		id, name, startDate, endDate, index, functions, month
	}) => {
		const [editEventOpen, openEditEvent] = useState(false),
			listings = [],
			monthStart = new Date(startDate).setDate(1),
			monthStartDay = new Date(monthStart).getDay(),
			eventStart = new Date(startDate).getDate(),
			startDay = new Date(startDate).getDay(),
			eventEnd = new Date(endDate).getDate(),
			endDay = new Date(endDate).getDay(),
			listing = {
				name,
				id,
				start: startDay + 1,
				end: endDay + 2
			};

		if ((eventStart - 1) <= 7) {
			if (monthStartDay <= startDay) {
				listing.row = 1;
			} else {
				listing.row = 2;
			}
		} else {
			listing.row = Math.floor(((eventStart) / 7)) + 1;
		}

		if (endDate && startDate !== endDate) {
			const eventLength = eventEnd - eventStart;

			if (eventLength <= 8 && endDay > startDay) {
				listings.push({
					...listing,
				});
			} else {
				let n = eventStart + (6 - startDay),
					{ row } = listing;

				listings.push({
					...listing,
					end: 8
				});

				row += 1;

				while (n < (eventEnd - 7)) {
					listings.push({
						...listing,
						start: 1,
						end: 8,
						row
					});

					row += 1;
					n += 7;
				}

				listings.push({
					...listing,
					start: 1,
					row
				});
			}
		} else {
			listings.push({
				...listing,
				end: false
			});
		}

		return (
			<Fragment>
				{listings.map((event) => (
					<EventListing key={JSON.stringify(event)} {...{
						...event,
						startDate,
						endDate,
						functions,
						index,
						month,
						editEventOpen,
						openEditEvent,
					}} />
				))}
			</Fragment>
		);
	},
	EventListing = ({
		id, name, startDate, endDate, start, end, functions, index, row, editEventOpen,	openEditEvent, month
	}) => {
		const ref = useRef(null);

		return (
			<li
				className="event" style={{
					'--event_start': start,
					'--event_end': end,
					'--row': row
				}}
				ref={ref}
				data-id={id}
			>
				{name}
				<button className="icon" onClick={() => openEditEvent(!editEventOpen)}>
					<Edit />
					<span className="sr-only">Edit Event</span>
				</button>

				<div className="modal new" open={editEventOpen}>
					<button className="icon close" onClick={() => openEditEvent(!editEventOpen)}>
						<Close />
						<span className="sr-only">Close Modal</span>
					</button>
					<form onSubmit={(e) => { functions.editForm(ref, e); }}>
						<legend>Edit Event</legend>
						<label className="sr-only">Edit {name}</label>
						<input
							type="text"
							defaultValue={name}
							name="label"
							onChange={(e) => { functions.changeLabel(ref, e); }}
						/>

						<label htmlFor={`event_start`} >Start Date</label>
						<input
							type="date"
							id={`event_start`}
							name="startDate"
							min={`${month.year}-${`0${month.monthNum}`.slice(-2)}-01`}
							max={`${month.year}-${`0${month.monthNum}`.slice(-2)}-${month.monthLength}`}
							defaultValue={startDate}
							onChange={(e) => { functions.changeDate(ref, e); }}
						/>
						<label htmlFor={`event_end`} >End Date (optional)</label>
						<input
							type="date"
							id={`event_end`}
							name="endDate"
							min={`${month.year}-${`0${month.monthNum}`.slice(-2)}-01`}
							max={`${month.year}-${`0${month.monthNum}`.slice(-2)}-${month.monthLength}`}
							defaultValue={endDate}
							onChange={(e) => { functions.changeDate(ref, e); }}
						/>
						<button className="save" type="submit">Save Changes</button>
						<button className="icon remove" type="button" onClick={() => functions.deleteEvent(index)}>
							<Delete />
							<span className="sr-only">Delete Event</span>
						</button>
					</form>
				</div>
			</li>
		);
	};

export default Event;
