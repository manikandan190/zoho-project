import java.util.*;

class Bank {
	 Scanner sc=new Scanner(System.in);
	 Map<Integer,database> mapaccount=new HashMap<>();
	 Map<Integer,String> search_name=new TreeMap<>();

	 String  pin, mob, aadhaar;
	 String admin, user;
	 int id = 0, password = 2354;
	 String age;
	 Map<Integer, database> store_admin_details = new TreeMap<>();
	 database ad;
	 String name,mobileno,emailid,branch,pincode,gender;
	 int user_accno=0;
	 int amount=0;
	 int deleteaccno;
	 int deposite;
	 String bank_name="ZOHO BANK";
	 int accno;
	 int update_choice;
	 int a_id;
	 int user_pin = 0;
	 int choice;
	 String username;

	public static void main(String args[]) {
		Bank Bank=new Bank();
		Bank.display();
	}

	private  void display() {
		Scanner sc = new Scanner(System.in);
		System.out.println("Welcome to Zoho Bank");
        System.out.println();
		System.out.println("Choose  Your Option \n\n1.Admin\t\t 2.User");
        System.out.println();
        id=1313212;
		int welcome = sc.nextInt();
		int sisu;
		if (welcome > 2) {
			display();
		}
		switch (welcome) {

		case 1:
			System.out.println("1.Signin \t\t2.Signup");
			System.out.println();
			
			sisu = sc.nextInt();
			if (sisu == 1) {
				System.out.println("Enter your Id");
				id = sc.nextInt();
				System.out.println("Enter your Password");
				password = sc.nextInt();
				login(id, password);
			}
			if (sisu == 2) {
				id += 10;
				password += 45;
				System.out.println("Enter your Name");
				name = sc.next();
				System.out.println("Enter Your age");
				age = sc.next();
				System.out.println("Enter Your gender");
				gender = sc.next();
				System.out.println("Enter Your mail");
				emailid = sc.next();
				System.out.println("Enter your Mobile No");

				mobileno = sc.next();

				System.out.println("Enter your Branch");
				branch = sc.next();
				create_admin(id, password, name, age, gender, emailid, mobileno,
						branch);

			}
			if (sisu == 3) {
				displaylist();
			}
			break;
		case 2:
			System.out.println("1.New User\n2.Existing User");
			int c = sc.nextInt();
			if (c == 1) {
				System.out.println("Enter Your Account number");
				int accno = sc.nextInt();
				System.out.println("Enter Your Name");
				name = sc.next();
				System.out.println("Enter Your MobileNo");
				mobileno = sc.next();
				user_create(username, mobileno, accno);
			}
			if (c == 2) {
				System.out.println("Enter Your Account No");
				user_accno = sc.nextInt();
				System.out.println("Enter Your PIN(4 Digit)");
				user_pin = sc.nextInt();
				user_login(user_accno, user_pin);

			}

		}

	}
	private  void user_login(int user_accno,int user_password)
	{	database ad=mapaccount.get(user_accno);
		if(mapaccount.containsKey(user_accno)&&user_password==ad.getUser_pin())
		{
		
			
			System.out.println("Account Number:"+user_accno);
			System.out.println("Name :"+ad.getName());
			System.out.println("Gender: "+ad.getGender());
			System.out.println("Mobile No: "+ad.getMobileno());
			System.out.println("Email Id: "+ad.getEmailid());
			System.out.println("Branch :"+ad.getBranch());
			System.out.println("Pincode :"+ad.getPincode());
			System.out.println("Bank Name :"+ad.getBank_name());
		    System.out.println("Balance Amount : "+ad.getDeposite());
		    System.out.println("================================================");
		    displayacc(user_accno);
			
		}
		else {
			System.out.println("Wrong Pin");
			display();
		}
	}

private   void displayacc(int user_accno) {
	System.out.println("1.Deposite\n2.Withdraw\n3.Balance\n4.Exit");
    int a=sc.nextInt();
    int amount;
    switch(a) {
    case 1:
    
    	System.out.println("Enter The Amount");
    	 amount=sc.nextInt();
    	 System.out.println("================================================");
    	deposite(amount,user_accno);
    	
    	break;
    
    
    case 2:
    	System.out.println("Enter The Amount to Withdraw");
    	amount=sc.nextInt();
    	System.out.println("================================================");
    	withdraw(amount,user_accno);
    	
    	break;
    	
    
    case 3:
    
    	System.out.println("Account Balance");
    	balance(user_accno);
    	System.out.println("================================================");
    	break;
    case 4:
    	display();
    	System.out.println("================================================");
    	break;
    	
    }
   
		
	}

	private  void balance(int user_accno) {
		database ad=mapaccount.get(user_accno);
		ad.setDeposite(ad.getDeposite());
		mapaccount.put(user_accno,ad);
		System.out.println(ad.getDeposite());
		System.out.println("================================================");
		displayacc(user_accno);
		
	
	
	
}

	private  void withdraw(int amount, int user_accno) {
		database ad=mapaccount.get(user_accno);
		if(amount>ad.getDeposite())
		{
			System.out.println("Insufficient Amount");
			System.out.println("================================================");
			displayacc(user_accno);
			
			
		}
		else {
			ad.setDeposite(ad.getDeposite()-amount);
			mapaccount.put(user_accno, ad);
			displayacc(user_accno);
		}
		
	}

	private  void deposite(int amount,int user_accno) {
		database ad=mapaccount.get(user_accno);
		ad.setDeposite(ad.getDeposite()+amount);
		mapaccount.put(user_accno,ad);
		displayacc(user_accno);
		
		
		
	}


	private  void user_create(String username, String mobile_no, int accno) {
		
		database ad=mapaccount.get(accno);
	
		user_pin=user_pin+1023;
		if(mapaccount.containsKey(accno))
		{
			ad.setUser_pin(user_pin);
			
			System.out.println("User Pin:"+ad.getUser_pin());
			System.out.println("================================================");
			
			mapaccount.put(accno, ad);
			display();
		}
		else {
			System.out.println("User Does not exist");
			System.out.println("================================================");
			display();
		}
		
	}

	private  void displaylist() {
		for (Map.Entry<Integer, database> entry : store_admin_details.entrySet())

		{

			database ad = entry.getValue();
			int key = entry.getKey();
			System.out.println("Account Number:" + key);
			System.out.println("Account Created by ID:" + ad.getPassword());

			System.out.println("Name :" + ad.getName());
			System.out.println("Gender: " + ad.getGender());

			System.out.println("Email Id: " + ad.getEmailid());

		}

	}

	private  void create_admin(int id, int password, String name, String age,
			String admin_gender, String admin_mail, String admin_mobno, String admin_branch) {
		store_admin_details.put(id, new database(id, password, name, age,
				admin_gender, admin_mail, admin_mobno, admin_branch));
		database cda = store_admin_details.get(id);
		System.out.println("Admin id:" + cda.getId());
		System.out.println("Admin password: " + cda.getPassword());
		System.out.println("Admin Created Successfully");
		System.out.println("================================================");
		System.out.println("Login");
		System.out.println();
		boolean choice = true;
		while (choice) {
			try {
				System.out.println("Enter admin_id");
				Scanner sc = new Scanner(System.in);
				id = sc.nextInt();
				System.out.println("Enter password");
				password = sc.nextInt();
				login(id, password);
				choice = false;
			} catch (Exception e) {
				System.out.println("Enter the Input in Integer");
				choice = true;

			}
		}

	}
	//Admin
	
	
	private  void login(int id,int password)
	{
	Scanner sc=new Scanner(System.in);
	a_id=id;
	boolean check=true;
	database cda=store_admin_details.get(id);
	System.out.println(cda.getId());


	if(store_admin_details.containsKey(id)&&cda.getPassword()==(password))
		
	{
		
		

	while(check)	
	{
			System.out.println("1.Create User Account\n2.Delete User Account \n3.Update User Account \n4.List User Account \n5.View Account Details \n6.Search Name \n7.LogOut ");
			System.out.println();
			System.out.println("Enter Your Choice");
			
			int choice=sc.nextInt();
			System.out.println("================================================");
			switch(choice)
			{
			case 1:
			     createaccountdetails();
			     System.out.println("User Account Created succussfully");
			     System.out.println("================================================");
			    break;
			case 2:
				System.out.println("Enter the account number");
				deleteaccno=sc.nextInt();
				deleteaccount(deleteaccno);
				System.out.println("User Account number deleted successfully.");
			     System.out.println("================================================");
				break;
			case 3:
				update();
				
				break;
				
			case 4:
				printdatabase();
			    break;
			case 5:
				System.out.println("Enter the User Account Number");
				accno=sc.nextInt();
				System.out.println("================================================");
				viewaccount(accno);
			     
				break;
			case 6:
				search_name();
				break;
			case 7:
				System.out.println("Logout Successfully");
			     System.out.println("================================================");
				check=false;
				display();
				
				break;
			
			}}
	}
	else {
		System.out.println("Create an account");
		display();
	}
		}
	private  void search_name() {
		System.out.println("Enter the User Name");
		name=sc.next();
		search_name.entrySet().stream().filter(map -> map.getValue().startsWith(name))
	    .forEach(m -> viewaccount(m.getKey()));
		
		
	}
	private  void viewaccount(int accno) {
		Scanner sc=new Scanner(System.in);
		
		database ad=mapaccount.get(accno);
		database name=store_admin_details.get(ad.getId());
	
		
		System.out.println("Account Number:"+accno);
		System.out.println("Account Created by ID:"+ad.getId()+"    Name:"+name.getName());
		System.out.println("Name :"+ad.getName());
		System.out.println("Gender: "+ad.getGender());
		System.out.println("Mobile No: "+ad.getMobileno());
		System.out.println("Email Id: "+ad.getEmailid());
		System.out.println("Branch :"+ad.getBranch());
		System.out.println("Pincode :"+ad.getPincode());
		System.out.println("Bank Name :"+ad.getBank_name());
	    System.out.println("Balance Amount : "+ad.getDeposite());
	    System.out.println("================================================");
		
	}
	private  void createaccountdetails() {
		Scanner sc=new Scanner(System.in);
		user_accno=user_accno+1;
		
		System.out.println("Enter your name");
		
		name=sc.next();
		System.out.println("Enter your gender");
	    gender=sc.next();


	    System.out.println("Enter Your mobileno");
	    mobileno=sc.next();
	    System.out.println("Enter Your emailid");
	    emailid=sc.next();
	    System.out.println("Enter Your branch");
	    branch=sc.next();
	    System.out.println("Enter your pincode");
	    pincode=sc.next();
	    System.out.println("Enter your Amount to  deposite");
	    deposite = sc.nextInt();
	    search_name.put(user_accno,name);
	    System.out.println("================================================");
	   database cda=store_admin_details.get(a_id);
		
	    createaccount(user_accno,name,gender,mobileno,emailid,branch,pincode,deposite,bank_name,cda.getId(),cda.getName(),user_pin);
		
	}
	private   void update() {
		database ad;
		Scanner sc=new Scanner (System.in);
		System.out.println("Enter your Account Number");
		accno=sc.nextInt();
		System.out.println("================================================");
		if(mapaccount.containsKey(accno))
		{
		System.out.println("To update Enter your choice");
		System.out.println("1.Name\n2.Gender\n3.Mobile No\n4.Email Id \n5.Pincode\n 6.Branch");
		update_choice=sc.nextInt();
		switch(update_choice)
		{
		case 1:
			System.out.println("Enter The Name");
			name=sc.next();
			 ad=mapaccount.get(accno);
			ad.setName(name);
			mapaccount.put(accno, mapaccount.getOrDefault(accno, ad));
			search_name.put(accno, ad.getName());
			System.out.println(search_name);
		     System.out.println("================================================");
			break;
		case 2:
			System.out.println("Enter The Gender");
			gender=sc.next();
			 ad=mapaccount.get(accno);
			ad.setGender(gender);
			mapaccount.put(accno, mapaccount.getOrDefault(accno, ad));
		     System.out.println("================================================");
			break;
		case 3:
			System.out.println("Enter The Mobile No");
			mobileno=sc.next();
			ad=mapaccount.get(accno);
			ad.setMobileno(mobileno);
			mapaccount.put(accno, mapaccount.getOrDefault(accno, ad));
		     System.out.println("================================================");
			break;
		case 4:
			System.out.println("Enter The Email Id");
			emailid=sc.next();
			ad=mapaccount.get(accno);
			ad.setMobileno(emailid);
			mapaccount.put(accno, mapaccount.getOrDefault(accno, ad));
		     System.out.println("================================================");
			break;
		case 5:
			System.out.println("Enter The Pincode");
			pincode=sc.next();
			ad=mapaccount.get(accno);
			ad.setMobileno(pincode);
			mapaccount.put(accno, mapaccount.getOrDefault(accno, ad));
		     System.out.println("================================================");
			break;
		case 6:
			System.out.println("Enter The Branch");
			branch=sc.next();
			ad=mapaccount.get(accno);
			ad.setBranch(branch);
			mapaccount.put(accno, mapaccount.getOrDefault(accno, ad));
		     System.out.println("================================================");
			break;
		
			
		}
		
		System.out.println("Account Updated succussfully");
	    System.out.println("================================================");
		}
		
		else {
			System.out.println("Account Does not Exist");
			System.out.println("================================================");
		}
		
	}
	private  void deleteaccount(int deleteaccno) {
		mapaccount.remove(deleteaccno);
		search_name.remove(deleteaccno);
		
	}
	private  void printdatabase() {
		for(Map.Entry<Integer,database> entry:mapaccount.entrySet())
			
		{
		database ad=entry.getValue();
			int key=entry.getKey();
			database name=store_admin_details.get(ad.getId());
			System.out.println("Account Number:"+key);
			System.out.println("Account Created by ID:"+ad.getId()+"    Name:"+name.getName());
			
			System.out.println("Name :"+ad.getName());
			System.out.println("Gender: "+ad.getGender());
			System.out.println("Mobile No: "+ad.getMobileno());
			System.out.println("Email Id: "+ad.getEmailid());
			System.out.println("Branch :"+ad.getBranch());
			System.out.println("Pincode :"+ad.getPincode());
			System.out.println("Bank Name :"+ad.getBank_name());
		    System.out.println("Balance Amount : "+ad.getDeposite());
		     System.out.println("================================================");
		    
		}
		
		
	}
	private  void createaccount(int user_accno,String name,String gender,String mobileno,String emailid,String branch,String pincode,int deposite,String bank_name,int id,String name1,int user_pin) {
		
		mapaccount.put(user_accno,new  database(user_accno,name,gender,mobileno,emailid,branch,pincode,deposite,bank_name,id,name1,user_pin));
		
		
	}


}
