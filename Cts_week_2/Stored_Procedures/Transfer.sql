CREATE OR REPLACE PROCEDURE TransferFunds(
  from_acc IN NUMBER,
  to_acc IN NUMBER,
  amount IN NUMBER
) IS
  insufficient_balance EXCEPTION;
BEGIN
  -- Check balance
  DECLARE
    current_balance NUMBER;
  BEGIN
    SELECT BALANCE INTO current_balance FROM ACCOUNTS WHERE ACCOUNT_ID = from_acc;

    IF current_balance < amount THEN
      RAISE insufficient_balance;
    END IF;
  END;

  -- Perform transfer
  UPDATE ACCOUNTS
  SET BALANCE = BALANCE - amount
  WHERE ACCOUNT_ID = from_acc;

  UPDATE ACCOUNTS
  SET BALANCE = BALANCE + amount
  WHERE ACCOUNT_ID = to_acc;

  COMMIT;
EXCEPTION
  WHEN insufficient_balance THEN
    DBMS_OUTPUT.PUT_LINE('Insufficient balance in account ' || from_acc);
    ROLLBACK;
  WHEN OTHERS THEN
    DBMS_OUTPUT.PUT_LINE('Error: ' || SQLERRM);
    ROLLBACK;
END;
