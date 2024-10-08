import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();
const { PORT } = process.env;

const triggerUrl = `http://localhost:${PORT}/create-ticket`;

const ticketData = {
    requester: '',
    technician: 'Unassigned',
    urgency: 'Low - Minor Inconvenience',
    impact: 'Low - Impact One Client',
    priority: 'High',
    request_type: 'Request For Service or Information',
    subject: 'Request for Loan Laptop',
    description: 'I require a laptop for today as I have forgotten mine. This ticket was sent via the triggerScript script.',
    id: '<#id>',
    category: '<#category>',
    mode: '<#mode>',
    subcategory: '<#subcategory>',
    status: 'Open',
    is_escalated: '<#is_escalated>',
    notification_status: '<#notification_status>',
    resolved_time: '<#resolved_time>',
    requester_ack_comments: '<#requester_ack_comments>',
    requester_ack_resolution: '<#requester_ack_resolution>',
    created_by: 'System',
    template: '<#template>',
    approval_status: '<#approval_status>',
    service_category: '<#service_category>',
    site: '<#site>',
    display_id: '<#display_id>',
    due_by_date: '<#due_by_date>',
    first_response_due_by_time: '<#first_response_due_by_time>',
    group: '<#group>',
    has_notes: '<#has_notes>',
    department: 'IT Service Ops',
};

const sendRequest = async (data) => {
    try {
        const response = await fetch(triggerUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (response.ok) {
            console.log('\x1b[32m', 'Ticket created successfully!', '\x1b[0m');
        } 
        
        else {
            console.error('Failed to create ticket:', result);
        }
    } 

    catch (error) {
        console.error('Error occurred:', error);
    }
};

// Simulate triggering with test data
sendRequest(ticketData);
