# MIS and Invoicing System - User Documentation (Assignment 3)
## Chain Management Module

---

## Table of Contents
1. [Introduction](#introduction)
2. [System Requirements](#system-requirements)
3. [Getting Started](#getting-started)
4. [Chain Management User Guide](#chain-management-user-guide)
5. [Features Overview](#features-overview)
6. [Troubleshooting](#troubleshooting)
7. [FAQ](#faq)

---

## 1. Introduction

### What is Chain Management?

The Chain Management module is an extension of the MIS and Invoicing System that enables organizations to manage multiple companies or business entities within their network. Each company (chain) is registered with its GST Number (GSTN) and can be organized into groups for better management and reporting.

### Purpose

This module helps organizations to:
- Register and manage multiple companies/business entities
- Store and track GST Numbers (GSTN) for each company
- Organize companies into groups for better categorization
- Filter and view companies by their assigned groups
- Maintain a centralized database of all business entities
- Ensure GST compliance by tracking company tax information

### Key Benefits

- **Centralized Management**: All company information in one place
- **Group Organization**: Categorize companies by region, type, or any custom criteria
- **GST Tracking**: Maintain accurate GST records for each entity
- **Easy Filtering**: Quickly find companies by their group assignment
- **Audit Trail**: Track when companies were added to the system

---

## 2. System Requirements

### For End Users (Web Access)
- **Web Browser**: Chrome 90+, Firefox 88+, Safari 14+, or Edge 90+
- **Internet Connection**: Stable broadband connection (minimum 2 Mbps)
- **Screen Resolution**: Minimum 1366x768 pixels
- **JavaScript**: Must be enabled

### For Developers/Administrators
- **Backend Requirements**:
  - Java 17 or higher
  - Spring Boot 3.x
  - MySQL 8.0+ or H2 Database
  - Maven 3.6+

- **Frontend Requirements**:
  - Node.js 16+ and npm
  - React 18
  - Vite build tool

---

## 3. Getting Started

### 3.1 Accessing Chain Management

1. **Login to the System**
   - Open your web browser
   - Navigate to the application URL
   - Enter your credentials and click "Login"

2. **Navigate to Chain Management**
   - After successful login, you'll see the dashboard
   - Look at the sidebar menu on the left
   - Click on "Chains" or "Chain Management" option
   - The Chain Management page will open

### 3.2 Chain Management Interface Overview

The Chain Management page consists of:

- **Add Company Form** (Top Section):
  - Company Name input field
  - GST Number input field
  - Group selection dropdown
  - "Add Company" button

- **Filter Section** (Middle):
  - "Filter by Group" dropdown
  - Shows "All Groups" by default

- **Company List Table** (Bottom):
  - Displays all registered companies
  - Columns: Company Name, GSTN, Group, Action
  - Delete button for each company

---

## 4. Chain Management User Guide

### 4.1 Adding a New Company

Follow these steps to register a new company in the system:

1. **Navigate to Chain Management**
   - Click "Chains" from the sidebar menu

2. **Fill in Company Details**
   - **Company Name**: Enter the full legal name of the company
     - Example: "ABC Enterprises Pvt Ltd"
   - **GST Number**: Enter the 15-digit GST Number
     - Format: 22AAAAA0000A1Z5
     - Must be unique (no duplicates allowed)
   - **Select Group**: Choose the group this company belongs to
     - Click the dropdown to see available groups
     - Select the appropriate group

3. **Submit the Form**
   - Click the "Add Company" button
   - If successful, the company will appear in the table below
   - The form will clear automatically for next entry

4. **Verify Addition**
   - Check the company list table
   - Your new company should appear at the bottom or top of the list
   - Verify all details are correct

**Important Notes:**
- All fields are mandatory
- GST Number must be unique
- You must have at least one group created before adding companies
- If any field is empty, you'll see an alert: "Please fill all fields"

### 4.2 Viewing Companies

#### View All Companies
1. Navigate to the Chain Management page
2. The table displays all active companies by default
3. Each row shows:
   - Company Name
   - GST Number (GSTN)
   - Associated Group Name
   - Delete action button

#### Understanding the Table
- **Company Column**: Full name of the registered company
- **GSTN Column**: 15-digit GST identification number
- **Group Column**: Name of the group the company belongs to
- **Action Column**: Contains the Delete button

### 4.3 Filtering Companies by Group

The filter feature helps you view companies belonging to a specific group:

1. **Locate the Filter Section**
   - Find "Filter by Group" heading
   - Below it, you'll see a dropdown menu

2. **Select a Group**
   - Click on the dropdown
   - Choose a specific group name
   - The table will automatically update to show only companies in that group

3. **View All Companies Again**
   - Select "All Groups" from the dropdown
   - The table will display all companies again

**Use Cases for Filtering:**
- View all companies in a specific region
- Check companies by business type
- Generate group-specific reports
- Audit companies within a category

### 4.4 Deleting a Company

To remove a company from the system:

1. **Locate the Company**
   - Find the company in the table
   - You can use the filter to narrow down the list

2. **Click Delete Button**
   - In the "Action" column, click the "Delete" button
   - The company will be marked as inactive

3. **Confirm Deletion**
   - The company will be removed from the active list
   - The table will refresh automatically

**Important Notes:**
- Deletion is a soft delete (company is marked inactive, not permanently removed)
- Deleted companies won't appear in the list
- This action helps maintain data integrity
- Contact administrator if you need to restore a deleted company

### 4.5 Best Practices

#### When Adding Companies:
- **Verify GST Number**: Double-check the 15-digit GSTN before submitting
- **Use Full Legal Names**: Enter complete company names as per registration
- **Assign Correct Groups**: Ensure companies are placed in appropriate groups
- **Avoid Duplicates**: Check if company already exists before adding

#### When Managing Companies:
- **Regular Updates**: Keep company information current
- **Group Organization**: Maintain logical group structures
- **Periodic Review**: Regularly review and clean up inactive companies
- **Data Accuracy**: Verify GST numbers are valid and active

---

## 5. Features Overview

### 5.1 Company Registration

**Key Features:**
- Simple form-based company registration
- Mandatory field validation
- Unique GST Number enforcement
- Automatic timestamp recording
- Group association at creation time

**Data Captured:**
- Company Name (Full legal name)
- GST Number (15-digit unique identifier)
- Associated Group
- Active Status (automatically set to active)
- Creation Date and Time (automatically recorded)

### 5.2 Group-Based Organization

**Benefits:**
- Categorize companies by any criteria (region, type, size, etc.)
- Easy filtering and reporting
- Better data organization
- Simplified management of large company networks

**How It Works:**
- Each company must belong to one group
- Groups are created in the Group Management module
- Companies can be filtered by their group assignment
- Group information is displayed in the company list

### 5.3 GST Number Management

**Purpose:**
- Track tax identification for each company
- Ensure compliance with GST regulations
- Maintain unique identifiers for each entity
- Support invoicing and billing operations

**Validation:**
- GST Number must be unique across all companies
- System prevents duplicate GSTN entries
- Format: 15-character alphanumeric code

### 5.4 Filtering and Search

**Filter by Group:**
- Dropdown-based filtering
- Instant results
- View all or specific group companies
- No page reload required

**Benefits:**
- Quick access to specific company sets
- Better data analysis
- Simplified reporting
- Improved user experience

### 5.5 Soft Delete Functionality

**How It Works:**
- Companies are marked as "inactive" instead of being permanently deleted
- Inactive companies don't appear in the main list
- Data is preserved for audit and historical purposes
- Can be restored by administrators if needed

**Advantages:**
- Data integrity maintained
- Audit trail preserved
- Accidental deletions can be recovered
- Historical data available for reporting

### 5.6 Responsive Design

**Features:**
- Works on desktop, tablet, and mobile devices
- Adaptive table layout
- Touch-friendly buttons and inputs
- Optimized for various screen sizes

---

## 6. Troubleshooting

### Common Issues and Solutions

#### Issue: Cannot Add Company - "Please fill all fields" Alert

**Possible Causes:**
- One or more fields are empty
- Group not selected

**Solutions:**
1. Check that Company Name is entered
2. Verify GST Number is filled in
3. Ensure a group is selected from the dropdown
4. All three fields must have values before submitting

---

#### Issue: Company Not Appearing After Adding

**Possible Causes:**
- Filter is active showing only specific group
- Page needs refresh
- Network error during submission

**Solutions:**
1. Check if "Filter by Group" is set to "All Groups"
2. Refresh the page (F5 or Ctrl+R)
3. Try adding the company again
4. Check your internet connection
5. Look for any error messages in the browser console

---

#### Issue: Cannot Select a Group

**Possible Causes:**
- No groups have been created yet
- Groups not loading from server
- Network connectivity issue

**Solutions:**
1. Navigate to Group Management and create at least one group first
2. Refresh the Chain Management page
3. Check internet connection
4. Contact administrator if groups exist but don't appear

---

#### Issue: Duplicate GST Number Error

**Possible Causes:**
- The GST Number is already registered in the system
- Another company has the same GSTN

**Solutions:**
1. Verify the GST Number is correct
2. Check if the company already exists in the system
3. Use the filter to search for existing companies
4. If it's a genuine duplicate, contact administrator
5. Update the existing company instead of creating new one

---

#### Issue: Filter Not Working

**Possible Causes:**
- JavaScript error
- Browser cache issue
- Network problem

**Solutions:**
1. Refresh the page
2. Clear browser cache and cookies
3. Try a different browser
4. Check browser console for errors
5. Ensure JavaScript is enabled

---

#### Issue: Delete Button Not Working

**Possible Causes:**
- Network connectivity issue
- Permission problem
- Server error

**Solutions:**
1. Check internet connection
2. Refresh the page and try again
3. Verify you have permission to delete companies
4. Contact administrator if problem persists
5. Check browser console for error messages

---

#### Issue: Page Loading Slowly

**Possible Causes:**
- Large number of companies in database
- Slow internet connection
- Server performance issues

**Solutions:**
1. Use the group filter to reduce displayed data
2. Check your internet speed
3. Close unnecessary browser tabs
4. Try during off-peak hours
5. Contact administrator about performance optimization

---

## 7. FAQ

### General Questions

**Q: What is a "Chain" in this system?**
A: A chain refers to a company or business entity that is part of your organization's network. Each chain is registered with its company name and GST Number.

**Q: Why do I need to assign a group to each company?**
A: Groups help organize companies for better management, reporting, and filtering. It allows you to categorize companies by region, type, or any other criteria relevant to your business.

**Q: Can I add a company without a GST Number?**
A: No, GST Number is mandatory for all companies. This ensures tax compliance and proper identification of each entity.

**Q: Is my data secure?**
A: Yes, the system uses industry-standard security practices. All data is stored securely and access is controlled through authentication.

---

### Company Management Questions

**Q: Can two companies have the same GST Number?**
A: No, GST Numbers must be unique. The system will prevent you from adding a company with a duplicate GSTN.

**Q: Can I change a company's information after adding it?**
A: Currently, the system supports adding and deleting companies. For updates, contact your administrator or delete and re-add the company with correct information.

**Q: What happens when I delete a company?**
A: The company is marked as inactive and removed from the active list. It's not permanently deleted, so administrators can restore it if needed.

**Q: Can a company belong to multiple groups?**
A: No, each company can only be assigned to one group at a time.

**Q: How many companies can I add?**
A: There is no fixed limit. You can add as many companies as needed for your organization.

---

### Group and Filtering Questions

**Q: What if I don't see any groups in the dropdown?**
A: You need to create groups first in the Group Management module before you can add companies.

**Q: Can I create a new group from the Chain Management page?**
A: No, groups must be created in the Group Management module. Navigate there from the sidebar menu.

**Q: Does filtering affect the database?**
A: No, filtering only changes what you see on the screen. It doesn't modify any data in the database.

**Q: Can I filter by company name or GST Number?**
A: Currently, filtering is only available by group. For specific company searches, you can manually scan the table or use your browser's search function (Ctrl+F).

---

### Technical Questions

**Q: What is the format of a GST Number?**
A: A GST Number (GSTN) is a 15-character alphanumeric code. Example: 22AAAAA0000A1Z5

**Q: Do I need special permissions to manage chains?**
A: You need to be logged into the system. Specific permissions may vary based on your organization's setup. Contact your administrator for details.

**Q: Can I export the company list?**
A: Export functionality may be available depending on your system configuration. Contact your administrator for export options.

**Q: Is there a mobile app?**
A: The system is web-based and works on mobile browsers. A dedicated mobile app may be available in the future.

**Q: What browsers are supported?**
A: Chrome, Firefox, Safari, and Edge (latest versions recommended for best experience).

---

### Data and Compliance Questions

**Q: How is GST Number validated?**
A: The system checks for uniqueness to prevent duplicates. Format validation may be implemented based on your organization's requirements.

**Q: Can I see when a company was added?**
A: Yes, the system records creation timestamps, though they may not be visible in the current interface. Contact administrator for historical data.

**Q: What happens to deleted companies' data?**
A: Deleted companies are marked inactive but data is retained for audit purposes. They can be restored by administrators if needed.

**Q: Is there an audit trail?**
A: Yes, the system maintains creation timestamps and active status for audit purposes.

---

## Support and Contact

### Getting Help

**Technical Support:**
- Email: support@yourcompany.com
- Phone: +1-XXX-XXX-XXXX
- Hours: Monday-Friday, 9 AM - 5 PM

**For Chain Management Issues:**
- Ensure you're logged in with proper credentials
- Check that groups exist before adding companies
- Verify all required fields are filled
- Contact support if issues persist

**Documentation:**
- User Guide: Available in the system help section
- Video Tutorials: [Link to tutorials]
- Knowledge Base: [Link to knowledge base]

**Feedback:**
We welcome your feedback to improve the Chain Management module. Please send suggestions to: feedback@yourcompany.com

---

## Appendix

### Glossary of Terms

- **Chain**: A company or business entity registered in the system
- **GSTN**: Goods and Services Tax Number - a 15-digit unique tax identifier
- **Group**: A category or collection used to organize companies
- **Soft Delete**: Marking a record as inactive instead of permanently removing it
- **Active Status**: Indicates whether a company is currently active in the system
- **Filter**: A feature to display only companies matching specific criteria

### GST Number Format

**Structure**: 15 characters (alphanumeric)
- First 2 digits: State code
- Next 10 characters: PAN of the business
- 13th character: Entity number
- 14th character: Default 'Z'
- 15th character: Check digit

**Example**: 22AAAAA0000A1Z5

### Quick Reference Guide

**To Add a Company:**
1. Enter Company Name
2. Enter GST Number
3. Select Group
4. Click "Add Company"

**To Filter Companies:**
1. Use "Filter by Group" dropdown
2. Select desired group
3. View filtered results

**To Delete a Company:**
1. Find company in table
2. Click "Delete" button
3. Company removed from list

### System Limitations

- Each company must belong to exactly one group
- GST Numbers must be unique across all companies
- Company names can be duplicated (different entities may have similar names)
- Filtering is currently available only by group
- Updates require delete and re-add process

### Integration with Other Modules

**Group Management:**
- Groups must be created before adding companies
- Companies are linked to groups
- Deleting a group may affect associated companies

**User Management:**
- Access controlled through user authentication
- Permissions may vary by user role

**Future Integrations:**
- Invoicing module will use company data
- Reporting module will generate chain-based reports
- Analytics dashboard will show chain statistics

---

## Project Information

**GitHub Repository**: https://github.com/Sanket-3/MIS-Invoicinng-System

**Live Demo URL**: https://kortney-unphonetic-toxically.ngrok-free.dev
*(Note: Project should be running on localhost for ngrok URL to work)*

**Local Development**:
- Backend: http://localhost:8080
- Frontend: http://localhost:5173

---

**Document Version**: 1.0 (Assignment 3)  
**Module**: Chain Management  
**Last Updated**: March 2026  
**Prepared By**: [Your Name]  
**Assignment**: Task 3 - Chain Management Module  
**Organization**: [Your Organization/Internship Company Name]

---

*This documentation covers the Chain Management module added in Assignment 3. For complete system documentation including User Management and Group Management, please refer to the main User Documentation.*

**End of Document**