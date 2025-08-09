BEGIN
  FOR loan IN (
    SELECT CUSTOMER_ID, DUE_DATE
    FROM LOANS
    WHERE DUE_DATE <= SYSDATE + 30
  ) LOOP
    DBMS_OUTPUT.PUT_LINE(
      'Reminder: Customer ' || loan.CUSTOMER_ID || 
      ' has a loan due on ' || TO_CHAR(loan.DUE_DATE, 'DD-MON-YYYY')
    );
  END LOOP;
END;
