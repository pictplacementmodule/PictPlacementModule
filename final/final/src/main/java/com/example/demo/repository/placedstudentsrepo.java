package com.example.demo.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.model.placedstudents;

public interface placedstudentsrepo extends JpaRepository<placedstudents, Integer> {
	@Transactional
	@Query(value = "SELECT id FROM placedstudents WHERE comp_id = ? ", nativeQuery = true)
	public List<Integer> findByComp(int id);

	@Query(value = "SELECT id FROM placedstudents WHERE comp_id = ? and pl_status=0 ", nativeQuery = true)
	public List<Integer> eligible(int id);
	@Modifying
	@Transactional
	@Query(value = "UPDATE placedstudents SET pl_status=1 WHERE id IN ?1 AND comp_id = ?2", nativeQuery = true)
	public void findByCompIdAndStudent(List<Integer> a, int cid);

	@Query(value = "SELECT * FROM placedstudents WHERE id = ?1", nativeQuery = true)
	public placedstudents findByStuId(int id);

	@Modifying
	@Transactional
	@Query(value = "DELETE FROM placedstudents WHERE id = ?1 AND pl_status <> 2", nativeQuery = true)
	public void deleteStuPlaced(int a);
}